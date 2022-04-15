import {useDispatch} from 'react-redux';
import store from './store';

export const IncAction = value => {
  store.dispatch({type: 'INCREMENT', payload: value});
};
export const decAction = value => {
  store.dispatch({type: 'DECREMENT', payload: value});
};

export const postPushAction = async () => {
  try {
    for (var i = 1; i <= 100; i++) {
      store.dispatch({type: 'PUSH_DATA_POST', payload: i});
    }
  } catch (err) {
    if (__DEV__) {
      console.log(err.message);
    }
  }
};
