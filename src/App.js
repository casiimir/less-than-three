import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [gameList, setGameList] = useState('');

  useEffect(() => {
    const getDeals = async() => {
      const result = await fetch('https://www.cheapshark.com/api/1.0/deals?&sortBy=deal+rating&onSale=1&upperPrice=3&metacritic=60&onSale=1');
      const data = await result.json();
  
      setGameList(data);
      console.log(data)
    }
    getDeals();
  }, []);

  // utility: check if TOT savings is than 70%
  const getListBySaving = (list) => list.filter((game) => game.savings >= 80);



  const populateGameItem = () => {
    return gameList.map((game, i) =>
    <li key={ i } className="gameList__item">
      <h3>{ game.title }</h3>
      <img src={ game.thumb } alt={ game.title }/>
      <p>price: { game.salePrice }</p>
      <a href={ `https://www.cheapshark.com/redirect?dealID=${game.dealID}` }>buy it!</a>
    </li>
  );
  } 

  return (
    <div className="App">
      <ul className="gameList">
        { gameList ? populateGameItem() : null }
      </ul>
    </div>
  );
}

export default App;
