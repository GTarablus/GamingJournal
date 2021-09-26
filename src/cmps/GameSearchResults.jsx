import { GameSearchResultPreview } from './GameSearchResultPreview';
import { useDispatch, useSelector } from 'react-redux';
import { clearGame } from '../store/actions/gameActions';

export const GameSearchResults = ({ results }) => {
  const dispatch = useDispatch();
  const onGameClicked = () => {
    dispatch(clearGame);
  };
  if (results) console.log(results);
  return !results ? (
    <h1>Loading...</h1>
  ) : (
    results.map((result) => {
      //   console.log(result.name);
      return (
        <GameSearchResultPreview
          result={result}
          onGameClicked={onGameClicked}
        />
      );
    })
  );
};
