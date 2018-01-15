import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import apiMiddleware from "./middleware/apiMiddleware";

let initialState = {
  stocks:[]
};

let composeEnhancers;

if (process.env.NODE_ENV !== 'production' && typeof window !== "undefined") {
    composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
} else {
    composeEnhancers = compose;
}

let store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(apiMiddleware)));
export default store