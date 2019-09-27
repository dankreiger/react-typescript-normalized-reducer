import {
  takeLatest,
  cancelled,
  delay,
  put,
  select,
  call
} from "redux-saga/effects";
import { push, LOCATION_CHANGE } from "connected-react-router";
import axios from "axios";
import { normalize } from "normalizr";
import { fetchTodosSuccess, fetchTodosFailure, hideTodos, showTodos } from "./";
import { ETodosActionTypes as TodoActionType } from "./types/todos.enum";
import {
  ITodosAction,
  ITodo,
  IByIdTodoDictionary
} from "./types/todos.interface";

import { Filter, EFilter } from "components/FilterLink";
import { ROUTER_ANIMATION_DURATION } from "utils/style-utils";
import {
  selectTodoFilter,
  selectFilteredTodos,
  selectByIdTodoDictionary
} from "./todos.selectors";
import * as fromApi from "api";
import {
  addTodoSuccess,
  fetchTodosBegin,
  toggleTodoSuccess
} from "./todos.actions";
import {
  TodoText,
  NormalizedByIdTodoDictionary,
  NormalizedByIdTodoListDictionary,
  TodoId
} from "./types/todos.type";
import * as schema from "./todos.schema";

export function* handleTodoFilterAsync(action: ITodosAction) {
  yield put(hideTodos());
  yield delay(ROUTER_ANIMATION_DURATION);
  yield put(push(`/${action.filter}`));
  yield delay(ROUTER_ANIMATION_DURATION);
  yield put(showTodos());
}

export function* handleRouteChangeAsync() {
  const filter: Filter = yield select(selectTodoFilter);
  const todos: ITodo[] = yield select(selectFilteredTodos);
  if (!todos.length) {
    yield put(fetchTodosBegin(filter));
  }
}
export function* handleFetchTodosBeginAsync() {
  /* see readme for more info - inflight cancellation doesn't seem to work reliably here */
  const filter: Filter = yield select(selectTodoFilter);
  let todos: ITodo[] = [];
  const source = yield axios.CancelToken.source();
  try {
    const response = yield call(fromApi.apiService, "get", {}, { source });
    todos = response.data;
    switch (filter) {
      case EFilter.ALL:
        break;
      case EFilter.ACTIVE:
        todos = todos.filter(t => !t.completed);
        break;
      case EFilter.COMPLETED:
        todos = todos.filter(t => t.completed);
        break;
      default:
        break;
    }
  } catch (error) {
    yield put(fetchTodosFailure({ filter, error: error.message || error }));
    return;
  } finally {
    if (cancelled()) {
      source.cancel();
    }
  }

  const todoListDictionary: NormalizedByIdTodoListDictionary = normalize(
    todos,
    schema.todoListSchema
  );
  yield put(fetchTodosSuccess({ response: todoListDictionary, filter }));
}

export function* handleAddTodoAsync({ text }: { text: TodoText }) {
  const source = yield axios.CancelToken.source();
  try {
    const response = yield fromApi.apiService("post", fromApi.newTodo(text), {
      source
    });
    const data: ITodo = yield response.data;
    const todoDictionary = normalize(
      data,
      schema.todoSchema
    ) as NormalizedByIdTodoDictionary;

    yield put(addTodoSuccess(todoDictionary));
  } catch (err) {
    console.log(err);
  }
}

export function* handleToggleTodoAsync({ id }: { id: TodoId }) {
  const source = yield axios.CancelToken.source();
  const byIdTodoDictionary: IByIdTodoDictionary = yield select(
    selectByIdTodoDictionary
  );
  const { completed } = byIdTodoDictionary[id];
  try {
    const response = yield fromApi.apiService(
      "patch",
      { completed: !completed },
      { source, resourceId: id }
    );

    const data: ITodo = yield response.data;
    const todoDictionary: NormalizedByIdTodoDictionary = normalize(
      data,
      schema.todoSchema as any
    );

    yield put(toggleTodoSuccess(todoDictionary));
  } catch (err) {
    console.log(err);
  }
}

export function* watchRouteChange() {
  yield takeLatest(LOCATION_CHANGE, handleRouteChangeAsync);
}

export function* watchTodoFilter() {
  yield takeLatest(
    TodoActionType.handleTodosFilter as any, // why can't I type this
    handleTodoFilterAsync
  );
}

export function* watchFetchTodosBegin() {
  yield takeLatest(
    TodoActionType.fetchTodosBegin as any, // why can't I type this
    handleFetchTodosBeginAsync
  );
}

export function* watchAddTodoBegin() {
  yield takeLatest(
    TodoActionType.addTodoBegin as any, // why can't I type this
    handleAddTodoAsync
  );
}

export function* watchToggleTodoBegin() {
  yield takeLatest(
    TodoActionType.toggleTodoBegin as any, // why can't I type this
    handleToggleTodoAsync
  );
}
