function GameItem({ game, storeList }) {

  // Format game's title
  const setReSizeGameTitle = (title) => title.length <= 18 ? title : title.substring(0, 13) + '...';

  // Store Icons
  const returnStoreImgBy = (storeID) => {
    for (let store of storeList) {
      if(storeID === store.storeID) return store.images.icon;
    }
  }

  return (
    <li id={ game.gameID } className="GameList__item">
      <div className="GameList__item--naming">
        <h3>{ setReSizeGameTitle(game.title || game.external) }</h3>
        <a href={ `https://www.cheapshark.com/redirect?dealID=${game.dealID ||
           game.cheapestDealID}` }>
          <img src ={ game.thumb } alt={ game.title || game.external }/>
        </a>
      </div>

      <div className="GameList__item--anim">
        <div className="shape">
          <img src={ `https://www.cheapshark.com/${ returnStoreImgBy(game.storeID) ||
            '/img/stores/icons/26.png' }` }
            alt={ game.title || game.external }
          />
        </div>
      </div>

      <div className="GameList__item--info">
        <p className="ex--price">{ game.normalPrice || 'tot' }</p>
        <p className="actual--price">{ game.salePrice || game.cheapest }</p>
        <a href={ `https://www.cheapshark.com/redirect?dealID=${game.dealID ||
          game.cheapestDealID}` }
        >buy it! </a>
      </div>

    </li>
  )
}

export default GameItem;