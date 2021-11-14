import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";

const Store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, promiseMiddleware)
);

export default Store;
