import { combineReducers } from 'redux';
import { gameReducer } from './gameReducer';
import { userReducer } from './userReducer';
// import { systemReducer } from './systemReducer'

export const rootReducer = combineReducers({
  gameModule: gameReducer,
  userModule: userReducer,
});
