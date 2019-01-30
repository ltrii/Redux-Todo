import { combineReducers } from 'redux';
import mainReducer from './todo';

const rootReducer = combineReducers({
  todos: mainReducer
});

export default rootReducer;