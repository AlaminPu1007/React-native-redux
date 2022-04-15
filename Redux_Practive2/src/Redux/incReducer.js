// define our all initial state here
const initialState = {
  count: 0,
  token: null,
};

const IncReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // if (__DEV__) {
      //   console.log(state, action, 'ghjgjh');
      // }
      return {
        ...state,
        count: state.count + action.payload,
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.payload,
      };

    default:
      return state;
  }
};

export default IncReducer;
