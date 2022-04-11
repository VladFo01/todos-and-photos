const defaultState = {
    todoValue: ''
}

export const inputTodoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UPDATE_VALUE":
            return {...state, todoValue: action.payload};
        default:
            return state;
    }
}