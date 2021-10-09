import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

export function configureStore() {
  let store;
  store = createStore(rootReducer, applyMiddleware(thunk, logger));
  return store;
}
