import { takeLatest, cancelled, delay, put, select } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";
import { normalize } from "normalizr";
import { fetchTodosSuccess, fetchTodosFailure, hideTodos, showTodos } from "./";
import { ETodosActionTypes as TodoActionType } from "./types/todos.enum";
import { ITodosAction, ITodo } from "./types/todos.interface";

import { Filter, EFilter } from "components/FilterLink";
import { ROUTER_ANIMATION_DURATION } from "utils/style-utils";
import { selectTodoFilter } from "./todos.selectors";
import * as fromApi from "api";
import { addTodoSuccess } from "./todos.actions";
import {
  TodoText,
  NormalizedByIdTodoDictionary,
  NormalizedByIdTodoListDictionary
} from "./types/todos.type";
import * as schema from "./todos.schema";

export function* handleRouteChangeAsync(action: ITodosAction) {
  yield put(hideTodos());
  yield delay(ROUTER_ANIMATION_DURATION);
  yield put(push(`/${action.filter}`));
  yield delay(ROUTER_ANIMATION_DURATION);
  yield put(showTodos());
}

export function* handleFetchTodosBeginAsync() {
  /* see readme for more info - inflight cancellation doesn't seem to work reliably here */
  const filter: Filter = yield select(selectTodoFilter);
  let todos: ITodo[] = [];
  let response: any;
  const source = yield axios.CancelToken.source();

  try {
    response = yield fromApi.fetchAPI(source);
    todos = yield response.data;
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
    if (yield cancelled()) {
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
  try {
    const response = yield fromApi.addTodoPost(text);
    const data: ITodo = yield response.data;
    const todoDictionary: NormalizedByIdTodoDictionary = normalize(
      data,
      schema.todoSchema as any
    );

    yield put(addTodoSuccess(todoDictionary));
  } catch (err) {
    console.log(err);
  }
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

export function* watchAddTodoBegin() {
  yield takeLatest(
    TodoActionType.addTodoBegin as any, // why can't I type this
    handleAddTodoAsync
  );
}
