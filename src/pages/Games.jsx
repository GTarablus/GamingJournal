import React, { useEffect, useState } from 'react';
import { gameService } from '../services/gameService';
import { GameList } from '../cmps/GameList';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../store/actions/gameActions';

export const Games = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.gameModule.games);

  useEffect(() => {
    dispatch(loadGames());
  }, []);

  return games.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="main-games-container">
      <GameList games={games} />
    </div>
  );
};
