import React, { useState } from 'react';
import GameItem from './GameItem';
import GameList from './GameList';
import './Search.css';

function Search({ storeList }) {

  const [gameList, setGameList] = useState([]);

  const getDataGamesFrom = async() => {
    const submit = document.querySelector('#searchInput');
    const result = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${submit.value}`)
    const data = await result.json();

    setGameList(data);
  }

  const clearInputField = () => {
    const searchInput = document.querySelector('#searchInput');
    searchInput.value = '';
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    getDataGamesFrom(gameList);
    clearInputField();
  }

  return (
    <div className="Search">
      
      <form onSubmit={ onFormSubmit }>        
        <input type="search" name="" id="searchInput" placeholder="Title ..." />
        <button type="submit"> Find it! </button>
      </form>

      <GameList gameList = { gameList } storeList={ storeList }/>
      
    </div>
  );
}

export default Search;
