import { useEffect, useState } from 'react';
import { GameSwiper } from './GameSwiper';
import { GameBullets } from './GameBullets';
import { useDispatch, useSelector } from 'react-redux';
import {
  getGameByID,
  clearGame,
  setGameScreenshots,
} from '../store/actions/gameActions';

export const GameDetails = (props) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.gameModule.game);
  const screenshots = useSelector((state) => state.gameModule.screenshots);

  useEffect(() => {
    const gameId = props.match.params.gameId;
    dispatch(getGameByID(gameId));
    dispatch(setGameScreenshots(gameId));
    return () => {
      dispatch(clearGame());
    };
  }, []);
  console.log(game);
  return !game ? (
    <h1>Loading...</h1>
  ) : (
    <section className="main-details-container">
      <h1 className="game-title">{game.name}</h1>
      <div className="game-images-bullets-container">
        <GameSwiper gameImgs={screenshots} />
        <GameBullets game={game} />
      </div>
    </section>
  );
};
