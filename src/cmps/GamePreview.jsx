import { useState } from 'react';
import { Link } from 'react-router-dom';

export const GamePreview = (props) => {
  const [game, setGame] = useState(props.game);
  return (
    <div className="game-preview">
      <Link to={`/games/${game.id}`}>
        <img src={game.background_image} alt="" />
        <h3 className="game-title">{game.name}</h3>
      </Link>
    </div>
  );
};
