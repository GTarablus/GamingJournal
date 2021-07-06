export const GameBullets = (props) => {
  const game = props.game;
  return (
    <div className="game-bullets">
      <ul>
        <li>{game.released}</li>
        <li>{game.rating}</li>
        <li>{`${game.genres[0].name}, ${game.genres[1].name}`}</li>
        <li>{game.esrb_rating.name}</li>
      </ul>
    </div>
  );
};
