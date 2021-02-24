import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';

function App() {

  const [gameList, setGameList] = useState('');

  useEffect(() => {
    const getDeals = async() => {
      const result = await fetch('https://www.cheapshark.com/api/1.0/deals?&sortBy=deal+rating&onSale=1&upperPrice=3&metacritic=60&onSale=1');
      const data = await result.json();
  
      setGameList(data);
    }
    getDeals();
  }, []);

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
          <div className="shape" style={{background: setRandomColour()}}></div>
        </div>

        <div className="gameList__item--info">
          <p className="ex--price">{ game.normalPrice || 'tot' }</p>
          <p className="actual--price">{ game.salePrice || game.cheapest }</p>
          <a href={ `https://www.cheapshark.com/redirect?dealID=${game.dealID}` }>buy it!</a>
        </div>
      </li>
    );
  } 

  const [runSearch, setRunSeach] = useState(false);

  const btnSearchShow = () => {
    const searchExpanderBtn = document.querySelector('.searchExpanderBtn');
    
    if (searchExpanderBtn.textContent === '🏠') {
      searchExpanderBtn.textContent = '🔍';
    } else {
      searchExpanderBtn.textContent = '🏠';
    }

    runSearch ? setRunSeach(false) : setRunSeach(true);
  }

  return (
    <div className="App">
      <button className="searchExpanderBtn" onClick={ btnSearchShow }>🔍</button>
      {
        runSearch ? <Search populateGameItem={ populateGameItem }/> : 
        <ul className="gameList">
          { gameList ? populateGameItem(gameList) : null }
        </ul>
      }
    </div>
  );
}

export default App;
