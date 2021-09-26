import { gameService } from '../../services/gameService';

export function loadGames() {
  return async (dispatch) => {
    try {
      const gamesFromApi = await gameService.query();
      const games = gamesFromApi.results;
      dispatch({ type: 'SET_GAMES', games });
    } catch (err) {
      console.log('GameActions: err in loadGames', err);
    }
  };
}

export function setSearch(data) {
  const query = data.query;
  return async (dispatch) => {
    try {
      const searchResults = await gameService.getSearchResults(query);
      dispatch({ type: 'SET_SEARCH', results: searchResults.results });
    } catch (err) {
      console.log('GameActions: err in setSearch', err);
    }
  };
}

export function getGameByID(gameId) {
  return async (dispatch) => {
    try {
      const game = await gameService.getGameById(gameId);
      console.log(game);
      setGameScreenshots(game.slug);
      dispatch({ type: 'SET_GAME', game });
    } catch (err) {
      console.log('GameActions: err in getGameByID', err);
    }
  };
}

export function setGameScreenshots(slug) {
  return async (dispatch) => {
    try {
      const response = await gameService.getScreenshots(slug);
      const screenshots = response.results.map((game) => {
        return {
          original: game.image,
          thumbnail: game.image,
        };
      });
      console.log(screenshots);
      dispatch({ type: 'SET_SCREENSHOTS', screenshots });
    } catch (err) {
      console.log('GameActions: err in setGameScreenshots', err);
    }
  };
}

export function clearGame() {
  return async (dispatch) => {
    try {
      dispatch({ type: 'CLEAR_GAME' });
    } catch (err) {}
  };
}
