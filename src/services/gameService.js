import { httpService } from './httpService';

export const gameService = {
  query,
  getGameById,
  getScreenshots,
};

function query() {
  return httpService.get(`games`);
}

function getGameById(gameId) {
  console.log(gameId);
  return httpService.get(`games/${gameId}`);
}

function getScreenshots(slug) {
  console.log(slug);
  return httpService.get(`games/${slug}/screenshots`);
}
