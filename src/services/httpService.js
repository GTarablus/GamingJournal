import Axios from 'axios';

const BASE_URL = 'https://api.rawg.io/api/';
// const API_KEY = 'e91b2bc088c24679bef700c99473b76d';

var axios = Axios.create({});

export const httpService = {
  get(endpoint, data) {
    return ajax(endpoint, 'GET', data);
  },
  post(endpoint, data) {
    return ajax(endpoint, 'POST', data);
  },
  put(endpoint, data) {
    return ajax(endpoint, 'PUT', data);
  },
  delete(endpoint, data) {
    return ajax(endpoint, 'DELETE', data);
  },
};

async function ajax(endpoint, method = 'get', data = null) {
  // console.log('url:', `${BASE_URL}${endpoint}`);
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === 'GET' ? data : null,
    });
    return res.data;
  } catch (err) {
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`
    );
    console.dir(err);
    if (err.response && err.response.status === 401) {
      window.location.assign('/#/login');
    }
    throw err;
  }
}
