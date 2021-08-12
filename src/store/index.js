import { createStore, applyMiddleware, compose } from "redux";
import createRootReducer from "../reducers";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  createRootReducer(),
  composeEnhancers(applyMiddleware(thunk))
);
export default store;