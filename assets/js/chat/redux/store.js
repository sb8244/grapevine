import {combineReducers, createStore, applyMiddleware, compose} from 'redux';

import {promptReducer} from "./prompt_reducer";
import {socketReducer} from "./socket_reducer";

let rootReducer = combineReducers({
  prompt: promptReducer,
  socket: socketReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers();

export const makeStore = () => {
  return createStore(rootReducer, enhancer);
};
