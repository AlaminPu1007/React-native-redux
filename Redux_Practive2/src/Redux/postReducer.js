// define our all initial state here
const initialState = {
  post: [],
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_DATA_POST':
      return {
        ...state,
        post: [
          ...state.post,
          {
            id: Math.random() * 7675646456,
            title: `Title ${action.payload}`,
            name: `John ${action.payload}`,
          },
        ],
      };

    case 'UPDATE_POST':
      ;
      const newState = [...state.post];
      newState[action.payload] = {
        ...state.post[action.payload],
        // id:  Math.random() * 7675646456,
        title: `Title update`,
        name: `John update`,
      };

      return {
        ...state,
        post: newState,
      };

    default:
      return state;
  }
};

export default PostReducer;
