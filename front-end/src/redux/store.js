import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(sagaMiddleware);

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

sagaMiddleware.run(rootSaga);
