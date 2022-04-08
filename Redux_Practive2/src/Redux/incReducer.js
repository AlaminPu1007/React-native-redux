// define our all initial state here
const initialState = {
  count: 0,
  token: null,
  post: [],
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

    case 'PUSH_DATA_POST':
      return {
        ...state,
        post: [
          ...state.post,
          {
            id: action.payload,
            title: Math.floor(Math.random() * 9999),
            name: `John ${action.payload}`,
          },
        ],
      };

    default:
      return state;
  }
};

export default IncReducer;
