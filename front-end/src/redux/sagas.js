import { all } from "redux-saga/effects";
import task from "./task/saga";

export default function* rootSaga() {
  return yield all([task]);
}
