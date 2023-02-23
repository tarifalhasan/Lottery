const initialState = {
  like: [],
};

function likeReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_INTRAM_LIKE':
      return {
        ...state,
        like: [...state.like, action.payload],
      };
    default:
      return state;
  }
}

export default likeReducer;
