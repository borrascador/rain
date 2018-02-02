import { combineReducers } from 'redux';
import inventory from './inventory';

export default combineReducers({
  inventory,
  player,
  canvas,
});
