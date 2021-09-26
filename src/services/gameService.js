import { httpService } from './httpService';

export const gameService = {
  query,
  getGameById,
  getScreenshots,
  getSearchResults,
};

const PATH = 'games';
const API_KEY = 'e91b2bc088c24679bef700c99473b76d';

function query(pageNum = 1) {
  return httpService.get(`${PATH}?page=${pageNum}&key=${API_KEY}`);
}

function getGameById(gameId) {
  // console.log(gameId);
  return httpService.get(`${PATH}/${gameId}?key=${API_KEY}`);
}

function getSearchResults(query) {
  return httpService.get(`${PATH}?search=${query}&key=${API_KEY}`);
}

function getScreenshots(slug) {
  // console.log(slug);
  return httpService.get(`${PATH}/${slug}/screenshots?key=${API_KEY}`);
}
