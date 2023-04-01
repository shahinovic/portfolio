import { combineReducers } from "redux";
import dirReducer from "./dirReducer";
import styleReducer from "./styleReducer";

export default combineReducers({
  dir: dirReducer,
  style: styleReducer,
});
