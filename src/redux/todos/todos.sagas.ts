import { takeLatest, delay, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import { hideTodos, showTodos } from "./todos.actions";
import { ETodosActionTypes } from "./todos.enum";
import { FilterLinkPath } from "../../components/FilterLink/FilterLink.type";
import { ROUTER_ANIMATION_DURATION } from "../../utils/style-utils";

export function* handleRouteChangeAsync({ path }: { path: FilterLinkPath }) {
  yield put(hideTodos());
  yield delay(ROUTER_ANIMATION_DURATION);
  yield put(push(path));
  yield delay(ROUTER_ANIMATION_DURATION);
  yield put(showTodos());
}

export function* watchRouteChange() {
  yield takeLatest(
    ETodosActionTypes.handleTodosFilter as any,
    handleRouteChangeAsync
  );
}
