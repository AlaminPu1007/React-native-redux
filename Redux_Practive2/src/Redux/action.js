import {useDispatch} from 'react-redux';
import store from './store';

export const IncAction = value => {
  store.dispatch({type: 'INCREMENT', payload: value});
};
export const decAction = value => {
  store.dispatch({type: 'DECREMENT', payload: value});
};

export const postPushAction = async value => {
  try {
    for (let i = 0; i < 1000; i++) {
      store.dispatch({type: 'PUSH_DATA_POST', payload: i});
    }
  } catch (err) {
    if (__DEV__) {
      console.log(err.message);
    }
  }
};
