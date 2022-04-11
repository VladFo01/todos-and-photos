const defaultState = {
  photos: [],
};

export const photoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_PHOTOS":
      return {...state, photos: [...action.payload]};
    default:
      return state;
  }
};
