const defaultState = {
  todos: [],
  sortedBy: "",
};

export const todoReducer = (state = defaultState, action) => {
  let index;

  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload) {
        return state;
      }
      state.todos.unshift({
        id: Date.now().toString(),
        value: action.payload,
        done: false,
      });
      return { ...state, todos: [...state.todos] };
    case "DELETE_TODO":
      index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1);
      return { ...state, todos: [...state.todos] };
    case "CHANGE_STATUS":
      index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(index, 1, {
        id: action.payload,
        value: state.todos[index].value,
        done: !state.todos[index].done,
      });
      state.todos.sort((a, b) => {
        if (a.done && !b.done) return 1;
        if (!a.done && b.done) return -1;
        return 0;
      });
      return { ...state, todos: [...state.todos] };
    case "CHANGE_SORT":
      if (action.payload === state.sortedBy) {
        return state;
      }
      return { ...state, sortedBy: action.payload };
    default:
      return state;
  }
};
