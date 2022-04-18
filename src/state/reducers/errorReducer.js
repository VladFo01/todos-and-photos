const defaultState = {
  errorTodos: "",
  errorPhotos: "",
};

export const errorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CATCH_ERROR":
      switch (action.payload.type) {
        case "PHOTOS":
          return { ...state, errorPhotos: action.payload.error };
        case "TODOS":
          return { ...state, errorTodos: action.payload.error };
        default:
          return state;
      }
    case "REMOVE_ERROR":
      switch (action.payload.type) {
        case "PHOTOS":
          return { ...state, errorPhotos: "" };
        case "TODOS":
          return { ...state, errorTodos: "" };
        default:
          return state;
      }
    default:
      return state;
  }
};
