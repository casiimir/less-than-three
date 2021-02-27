import React, { useState, useEffect } from 'react';
import Search from './Search';
import Loader from './Loader';
import GameList from './GameList';
import Footer from './Footer';

const rmDuplicateGame = (list) => list.filter((v,i,a)=>a.findIndex(t=>(t.title === v.title))===i);

const dataAPI = {
  url: 'https://www.cheapshark.com/api/1.0',
  sortBy: 'deal+rating',
  onSale: 'onSale=1',
  lowPrice: 'lowerPrice=0',
  upPrice: 'upperPrice=3',
  critic: 'metacritic=60',
  def: '&sortBy=deal+rating&onSale=1&lowerPrice=0&upperPrice=3&metacritic=60',
}

function Main() {

  // STATE
  const [gameList, setGameList] = useState('');
  const [storeList, setStoreList] = useState('');
  const [runSearch, setRunSeach] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [loadingScreen, setLoadingScreen] = useState(false);
 
  useEffect(() => {
    getDeals();
    getStoreIDs();
    setPageNumber(1)
  }, []);

  // FETCH & co.
  const getDeals = async() => {
    const { url, sortBy, onSale, lowPrice, upPrice, critic, def } = dataAPI;
    const result = await fetch(`${url}/deals?${def}&${onSale}&pageNumber=${pageNumber}`);
    const data = await result.json();

    setGameList(rmDuplicateGame(data));
  }

  const getStoreIDs = async() => {
    const result = await fetch(`${dataAPI.url}/stores`);
    const data = await result.json();

    setStoreList(data);
  }

  // UTILS
  const btnSearchShow = () => {
    const searchExpanderBtn = document.querySelector('.searchExpanderBtn');
    
    searchExpanderBtn.textContent === '🏠' ?
      searchExpanderBtn.textContent = '🔍' :
      searchExpanderBtn.textContent = '🏠';
      
    runSearch ? setRunSeach(false) : setRunSeach(true);
  }

  const changePageLeft = () => {
    if (pageNumber > 1) {
      setLoadingScreen(true);
      getDeals();

      setTimeout(() => {
        setPageNumber(pageNumber - 1);
        setLoadingScreen(false);
      }, 500);
    }
  }

  const changePageRight = () => {
    if (pageNumber < 7) {
      setLoadingScreen(true);
      getDeals();

      setTimeout(() => {
        window.scrollTo(0,0);        
        setPageNumber(pageNumber + 1);
        setLoadingScreen(false);
      }, 500);
    }
  }
  
  return (
    <main className="Main">
      <button className="searchExpanderBtn" onClick={ btnSearchShow }>🔍</button>
      {
        (!runSearch) ?
        <>
          <GameList gameList={ gameList } storeList={ storeList }/>
          { 
            (!loadingScreen) ?
            <div className="carosello">
              <button className="navButtonRight" onClick={ changePageRight }> { '>' } </button>
              <button className="navButtonLeft" onClick={ changePageLeft }> { '<' } </button>
            </div> :
            <Loader />
          }
        </> :          
        <Search storeList={ storeList }/>
      }      
      <Footer pageNumber={ pageNumber }/>
    </main>
  )
}

export default Main;