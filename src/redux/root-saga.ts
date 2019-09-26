import { all, takeEvery, call, select } from "redux-saga/effects";
import { watchFetchTodosBegin, watchRouteChange } from "./todos/todos.sagas";

export function* watchAndLog() {
  yield takeEvery("*", function* logger(action) {
    const state = yield select();

    console.log("action", action);
    console.log("state after", state);
  });
}

export default function* rootSaga() {
  yield all([call(watchRouteChange), call(watchFetchTodosBegin)]);
}
