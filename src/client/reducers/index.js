import { combineReducers } from 'redux';
import input from './input';
import map from './map';
// import player from './player';
// import images from './images';

const rootReducer = combineReducers({
  input,
  map,
  // player,
  // images,
});

export default rootReducer;
