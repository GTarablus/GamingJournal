import { useEffect, useState } from 'react';
import { GameSwiper } from './GameSwiper';
import { GameBullets } from './GameBullets';
import { GameGraphs } from './GameGraphs';
import { useDispatch, useSelector } from 'react-redux';
import {
  getGameByID,
  clearGame,
  setGameScreenshots,
} from '../store/actions/gameActions';
const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();

export const GameDetails = (props) => {
  const [hltbData, setHltbData] = useState();
  const [longDescription, setLongDescription] = useState(false);
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
  
  useEffect(() => {
    if (!game) return;
    fetchHltbData(game);
    console.log(game.name);
  }, [game]);
  
  async function fetchHltbData(game) {
    let hltb = await hltbService.search(game.name);
    if (!hltb) {
      hltb = await hltbService.search(game.slug);
    }
    setHltbData(hltb);
  }

  const toggleLongDescription = () => {
    setLongDescription(!longDescription);
  };
  // console.log(hltbData);
  return !game ? (
    <h1>Loading...</h1>
  ) : (
    <section className="main-details-container">
      <h1 className="game-title">{game.name}</h1>
      <div className="game-images-bullets-container">
        <GameSwiper gameImgs={screenshots} />
        <GameBullets game={game} hltbData={hltbData} />
      </div>
      <div
        title={`Click to ${longDescription ? 'collapse' : 'expand'}`}
        className={`game-description ${longDescription ? 'expanded' : ''}`}
        onClick={() => {
          toggleLongDescription();
        }}
      >
        {game.description_raw}
        <pre></pre>
      </div>
      {/* <div className="graph-container">
        <GameGraphs />
      </div> */}
    </section>
  );
};
