 import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer, { rootState } from "../reducers/RootReducer";

const middlewares = [ThunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export default function Store() {
    const store = createStore(
        rootReducer,
        composedEnhancers
        // window. REDUX DEVTOOLS EXTENSION && window. REDUX_DEVTOOLS E
    );
    return store;
};