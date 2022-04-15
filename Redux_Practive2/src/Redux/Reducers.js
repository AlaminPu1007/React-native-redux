import IncReducer from './incReducer';
import PostReducer from './postReducer';
import {combineReducers} from 'redux';

// our all reducer goes here
const rootReducers = combineReducers({
  IncReducer,
  PostReducer,
});
export default rootReducers;
