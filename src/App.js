import React, { useState, useEffect } from 'react';
import './App.css';

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

  const populateGameItem = () => {
    return gameList.map((game, i) =>
      <li key={ i } className="gameList__item">

        <div className="gameList__item--naming">
          <h3>{ setReSizeGameTitle(game.title) }</h3>
          <img src={ game.thumb } alt={ game.title }/>
        </div>

        <div className="gameList__item--anim">
          <div className="shape" style={{background: setRandomColour()}}></div>
        </div>

        <div className="gameList__item--info">
          <p className="ex--price">{ game.normalPrice }</p>
          <p className="actual--price">{ game.salePrice }</p>
          <a href={ `https://www.cheapshark.com/redirect?dealID=${game.dealID}` }>buy it!</a>
        </div>

      </li>
    );
  } 

  return (
    <div className="App">
      <ul className="gameList">
        { gameList ? populateGameItem() : null }
      </ul>      
      {/* <button className="gameList__btn">load more...</button> */}
    </div>
  );
}

export default App;
