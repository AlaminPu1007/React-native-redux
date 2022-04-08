import {createStore} from 'redux';
import rootReducers from './Reducers';

//define our store with all reducers
const store = createStore(rootReducers);
export default store;
