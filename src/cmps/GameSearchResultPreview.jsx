import { Link } from 'react-router-dom';

export const GameSearchResultPreview = ({ result, onGameClicked }) => {
  return (
    <Link
      to={`/games/${result.id}`}
      replace
      className="search-result-link"
      onClick={() => onGameClicked()}
    >
      <div className="search-result-game-title">{result.name}</div>
    </Link>
  );
};
