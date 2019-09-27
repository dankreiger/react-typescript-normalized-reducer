import { takeLatest, delay, put, select } from "redux-saga/effects";
import { push } from "connected-react-router";

import { fetchTodosSuccess, hideTodos, showTodos } from "./";
import { ETodosActionTypes as TodoActionType } from "./types/todos.enum";
import { ITodosAction, ITodo } from "./types/todos.interface";

import { Filter, EFilter } from "components/FilterLink";
import { ROUTER_ANIMATION_DURATION } from "utils/style-utils";
import { selectTodoFilter } from "./todos.selectors";
import { abortableFetch, apiUrl } from "api";

export function* handleRouteChangeAsync(action: ITodosAction) {
  yield put(hideTodos());
  yield delay(ROUTER_ANIMATION_DURATION);
  yield put(push(`/${action.filter}`));
  yield delay(ROUTER_ANIMATION_DURATION);
  yield put(showTodos());
}

export function* handleFetchTodosBeginAsync() {
  const filter: Filter = yield select(selectTodoFilter);
  const response = yield abortableFetch(apiUrl);
  const data: ITodo[] = yield response.json();
  let todos: ITodo[];
  switch (filter) {
    case EFilter.ALL:
      yield (todos = data);
      break;
    case EFilter.ACTIVE:
      yield (todos = data.filter(t => !t.completed));
      break;
    case EFilter.COMPLETED:
      yield (todos = data.filter(t => t.completed));
      break;
    default:
      yield (todos = data);
      break;
  }
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
