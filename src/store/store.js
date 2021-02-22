import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { print1, print2, print3 } from './middleware/print';

const middlewareEnchancer = applyMiddleware(print1, print2, print3);

const store = createStore(rootReducer, middlewareEnchancer);

export default store;