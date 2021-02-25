import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';

const rmDuplicateGame = (list) => list.filter((v,i,a)=>a.findIndex(t=>(t.title === v.title))===i);

function App() {

  const [gameList, setGameList] = useState('');
  const [storeList, setStoreList] = useState('');
  const [runSearch, setRunSeach] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getDeals();
    getStoreIDs();
    
    setPageNumber(1)
  }, []);

  const getDeals = async() => {
    const result = await fetch(`https://www.cheapshark.com/api/1.0/deals?&sortBy=deal+rating&onSale=1&upperPrice=3&metacritic=60&onSale=1&pageNumber=${pageNumber}`);
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

  const setRandomColour = () => '#' + Math.floor(Math.random()*12914665).toString(16);

  const populateGameItem = (list) => {
    
    return list.map((game, i) =>
      <li key={ i } className="gameList__item">
        <div className="gameList__item--naming">
          <h3>{ setReSizeGameTitle(game.title || game.external) }</h3>
          <img src={ game.thumb } alt={ game.title || game.external }/>
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
    window.scrollTo(0, document.body.offsetHeight);

    setPageNumber(pageNumber - 1);
    getDeals();
  }

  const pageRightBtn = () => {
    window.scrollTo(0,0);

    setPageNumber(pageNumber + 1);
    getDeals();
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
          <button className="navButtonLeft" onClick={ pageLeftBtn }>👈</button>
            <ul className="gameList">
              { gameList ? populateGameItem(gameList) : null }
            </ul>
          <button className="navButtonRight" onClick={ pageRightBtn }>👉</button>
          <div className="pageFooter"> Page: { pageNumber }</div>
        </>
      }
    </div>
  );
}

export default App;
