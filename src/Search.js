import React, { useState } from 'react';
import './Search.css';

function Search({ populateGameItem }) {

  const [gameList, setGameList] = useState([]);
  // const [searchTitle, setSearchTitle] = useState('');

  const getDataGamesFrom = async() => {
    const submit = document.querySelector('#searchInput');

    const result = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${submit.value}`)
    const data = await result.json();

    setGameList(data);
  }

  return (
    <div className="Search">
      <input type="search" name="" id="searchInput" placeholder="Title ..." />
      <button type="submit" onClick={ () => {
          getDataGamesFrom(gameList);

          }
        }
      > Find it!
      </button>

      <ul className="gameList">
        { populateGameItem(gameList) } 
      </ul>
    </div>
  );
}

export default Search;
