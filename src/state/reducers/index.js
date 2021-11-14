import { combineReducers } from "redux";
import briefReducer from "./firstReducers";
import mainReducer from "./mainReducer";
import displayReducer from "./displayReducer";

const reducers = combineReducers({
  brief: briefReducer,
  mainState: mainReducer,
  output: displayReducer,
});

export default reducers;
