// redux/index.js
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error
});
const middleware = applyMiddleware(logger);

export const makeStore = (initialState, options) => {
    return createStore(
        reducer, 
        initialState,
        composeWithDevTools(middleware,applyMiddleware(thunk))
        );
};