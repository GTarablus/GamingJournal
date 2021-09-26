export const GameBullets = (props) => {
  const game = props.game;
  let hltbDataForGame = null;
  if (props.hltbData) {
    hltbDataForGame = props.hltbData[0];
  }
  console.log(hltbDataForGame);
  return !hltbDataForGame ? (
    <h1>Loading...</h1>
  ) : (
    <div className="game-bullets">
      <div className="game-actions">
        <button className="add-to-favorites-button">Wishlist</button>
        <button className="add-to-favorites-button">Favorite</button>
      </div>
      <div className="game-bullet-details">
        <p>
          Estimated Time for main story: {hltbDataForGame.gameplayMain} Hours
        </p>
        <p>
          Estimated time for Story + Side: {hltbDataForGame.gameplayMainExtra}
        </p>
        <p>
          Estimated time for Completionist{' '}
          {hltbDataForGame.gameplayCompletionist}
        </p>
        <p>Developer: {game.developers[0].name}</p>
        <p>Release Date: {game.released}</p>
        <p>Average user rating: {game.rating}</p>
        <p>Metacritic rating: {game.metacritic}</p>
        <p>Game genres: {`${game.genres[0].name}, ${game.genres[1].name}`}</p>
        <p>ESRB Rating: {game.esrb_rating.name}</p>
      </div>
    </div>
  );
};
