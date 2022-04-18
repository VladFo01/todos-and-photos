import { createStore, combineReducers, applyMiddleware } from "redux";
import { save, load } from 'redux-localstorage-simple';
import thunk from 'redux-thunk';
import { todoReducer } from "./reducers/todoReducer";
import { inputTodoReducer } from './reducers/inputTodoReducer';
import { photoReducer } from './reducers/photoReducer';
import { selectInputReducer } from './reducers/selectInputReducer';
import { errorReducer } from './reducers/errorReducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    inputTodo: inputTodoReducer,
    photo: photoReducer,
    selectInput: selectInputReducer,
    error: errorReducer,
});

const createStoreWithMiddleware = applyMiddleware(
    save({ states: ["todo"] }),
    thunk
)(createStore);

export const store = createStoreWithMiddleware(
    rootReducer,
    load({ states: ['todo'] })
);