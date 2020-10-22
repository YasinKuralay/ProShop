import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    productListReducer,
    productDetailsReducer,
} from './reducers/productReducers.js';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)) //we prefer to have an array of middleware, that's why we didn't just pass 'thunk' as an argument
);

export default store;
