import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux'

const initialState = {};

const middleware = [thunk];
const composeEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    initialState,
    composeEnhanced((applyMiddleware(...middleware)))
);

export default store;
