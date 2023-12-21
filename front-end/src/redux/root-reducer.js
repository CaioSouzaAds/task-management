import { combineReducers } from "redux";
import taskSlice from "./task/slice";

export default combineReducers({
  task: taskSlice,
});
