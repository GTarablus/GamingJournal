import { useState } from 'react';
import { GamePreview } from './GamePreview';

export const GameList = (props) => {
  const [games, setGames] = useState(props.games);
  return (
    <section className="game-list">
      {games.map((game) => {
        return <GamePreview key={game.id} game={game} />;
      })}
    </section>
  );
};
