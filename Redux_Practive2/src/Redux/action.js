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
    for (var i = 0; i < 1000; i++) {
      store.dispatch({type: 'PUSH_DATA_POST', payload: i});
    }

    store.dispatch({type: 'INCREMENT', payload: 2});

    store.dispatch({type: 'INCREMENT', payload: 1});
  } catch (err) {
    if (__DEV__) {
      console.log(err.message);
    }
  }
};
