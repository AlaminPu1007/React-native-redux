import IncReducer from './incReducer';
import {combineReducers} from 'redux';

// our all reducer goes here
const rootReducers = combineReducers({
  IncReducer,
});
export default rootReducers;
