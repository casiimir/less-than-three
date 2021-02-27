import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import Loader from './components/Loader';

const rmDuplicateGame = (list) => list.filter((v,i,a)=>a.findIndex(t=>(t.title === v.title))===i);

function App() {

  const [gameList, setGameList] = useState('');
  const [storeList, setStoreList] = useState('');
  const [runSearch, setRunSeach] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [loadingScreen, setLoadingScreen] = useState(false);

  // range price in fetch call
  const [lowerPrice, setLowerPrice] = useState(0);
  const [upperPrice, setUpperPrice] = useState(3);
 
  useEffect(() => {
    getDeals();
    getStoreIDs();
    
    setPageNumber(1)
  }, []);
  
  const getDeals = async() => {
    // const result = await fetch(`https://www.cheapshark.com/api/1.0/deals?&sortBy=deal+rating&onSale=1&upperPrice=3&metacritic=60&onSale=1&pageNumber=${pageNumber}`);
    const result = await fetch(`https://www.cheapshark.com/api/1.0/deals?&sortBy=deal+rating&onSale=1&lowerPrice=${lowerPrice}&upperPrice=${upperPrice}&metacritic=60&onSale=1&pageNumber=${pageNumber}`);
    const data = await result.json();

    setGameList(rmDuplicateGame(data));
  }

  const getStoreIDs = async() => {
    const result = await fetch(`https://www.cheapshark.com/api/1.0/stores`);
    const data = await result.json();

    setStoreList(data);
  }

  const returnStoreImgBy = (storeID) => {
    for (let store of storeList) {
      if(storeID === store.storeID) {
        return store.images.icon;
      }
    }
  }

  // utility: check if TOT savings is than 70%
  // const getListBySaving = (list) => list.filter((game) => game.savings >= 80);
  const setReSizeGameTitle = (title) => title.length <= 18 ? title : title.substring(0, 13) + '...';

  // const setRandomColour = () => '#' + Math.floor(Math.random()*12914665).toString(16);

  const populateGameItem = (list) => {
    
    return list.map((game, i) =>
      <li key={ i } className="gameList__item">
        <div className="gameList__item--naming">
          <h3>{ setReSizeGameTitle(game.title || game.external) }</h3>
          <a href={ `https://www.cheapshark.com/redirect?dealID=${game.dealID || game.cheapestDealID}` }>
            <img src ={ game.thumb } alt={ game.title || game.external }/>
          </a>
        </div>

        <div className="gameList__item--anim">
          <div className="shape">
            <img src={ `https://www.cheapshark.com/${ returnStoreImgBy(game.storeID) || '/img/stores/icons/26.png' }`  }
                 alt={ game.title || game.external }/>
          </div>
        </div>

        <div className="gameList__item--info">
          <p className="ex--price">{ game.normalPrice || 'tot' }</p>
          <p className="actual--price">{ game.salePrice || game.cheapest }</p>
          <a href={ `https://www.cheapshark.com/redirect?dealID=${game.dealID || game.cheapestDealID}` }>buy it!</a>
        </div>
      </li>
    );
  } 

  const btnSearchShow = () => {
    const searchExpanderBtn = document.querySelector('.searchExpanderBtn');
    
    if (searchExpanderBtn.textContent === '🏠') {
      searchExpanderBtn.textContent = '🔍';
    } else {
      searchExpanderBtn.textContent = '🏠';
    }

    runSearch ? setRunSeach(false) : setRunSeach(true);
  }



  const pageLeftBtn = () => {
    if (pageNumber > 1) {
      setLoadingScreen(true);
      getDeals();

      setTimeout(() => {
        setPageNumber(pageNumber - 1);
        setLoadingScreen(false);
      }, 500);
    }
  }

  const pageRightBtn = () => {
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
    <div className="App">
      <header>
        <h3>Less Than</h3>
        <h2>3</h2>
      </header>
      <button className="searchExpanderBtn" onClick={ btnSearchShow }>🔍</button>
      {
        runSearch ? <Search populateGameItem={ populateGameItem }/> : 
        <>
          { 
            (!loadingScreen) ?
            <button className="navButtonLeft" onClick={ pageLeftBtn }> { '<' } </button> :
            <Loader />
          }    

            <ul className="gameList">
              { gameList ? populateGameItem(gameList) : null }
            </ul>

            { 
            (!loadingScreen) ?
            <button className="navButtonRight" onClick={ pageRightBtn }> { '>' } </button> :
            <Loader />
          } 
          
          <div className="pageFooter">
            <p className="pageFooter--text">Less Than <em>3</em>, by Casiimir. &copy; 2021</p>
            <div className="pageFooter--status">
              <p>Page:</p>
              <p> { pageNumber }</p>
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default App;
