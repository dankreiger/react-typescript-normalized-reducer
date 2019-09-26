import { takeLatest, delay, put, select } from "redux-saga/effects";
import { push } from "connected-react-router";

import { fetchTodosSuccess, hideTodos, showTodos } from "./";
import { ETodosActionTypes as TodoActionType } from "./types/todos.enum";
import { ITodosAction } from "./types/todos.interface";

import { Filter } from "components/FilterLink";
import { ROUTER_ANIMATION_DURATION } from "utils/style-utils";
import { selectTodoFilter } from "./todos.selectors";
import { fetchTodos } from "api";

export function* handleRouteChangeAsync(action: ITodosAction) {
  yield put(hideTodos());
  yield delay(ROUTER_ANIMATION_DURATION);
  yield put(push(`/${action.filter}`));
  yield delay(ROUTER_ANIMATION_DURATION);
  yield put(showTodos());
}

export function* handleFetchTodosBeginAsync() {
  const filter: Filter = yield select(selectTodoFilter);
  const todos = yield fetchTodos(filter);
  yield put(fetchTodosSuccess({ response: todos, filter }));
}

export function* watchRouteChange() {
  yield takeLatest(
    TodoActionType.handleTodosFilter as any, // why can't I type this
    handleRouteChangeAsync
  );
}

export function* watchFetchTodosBegin() {
  yield takeLatest(
    TodoActionType.fetchTodosBegin as any, // why can't I type this
    handleFetchTodosBeginAsync
  );
}
