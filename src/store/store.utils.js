import { createStore, applyMiddleware , compose } from 'redux';
import createRootReducer from '../reducers';
import  thunk  from 'redux-thunk';
export default function configureStore(preloadedState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        createRootReducer(),
        preloadedState,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
    return store;
}