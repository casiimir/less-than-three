import GameItem from './GameItem';
import './GameList.css';

function GameList({ gameList, storeList }) {
  return (
    <ul className="GameList">
      { gameList && gameList.map((game, i) => <GameItem game={ game } storeList={ storeList } key= { i }/>) }
    </ul>
  )
}

export default GameList;