import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchTasksSuccess, fetchTasksFailure } from "./slice";

import api from "../../services/api";

function* fetchTasks() {
  try {
    const response = yield call(api.get, "/tasks");
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

export default all([takeLatest("task/fetchTasks", fetchTasks)]);
