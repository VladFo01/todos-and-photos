const defaultState = {
    id: ''
}

export const selectInputReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "UPDATE_ID":
            return {...state, id: action.payload}
        default:
            return state;
    }
}