import { ITodosState } from "./";
import { createSelector } from "reselect";
import { IRootReducerState } from "redux/root-reducer";
import { Filter, EFilter } from "components/FilterLink";

const selectTodosReducer = (state: IRootReducerState) => state.todos;
const selectRouter = (state: IRootReducerState) => state.router;

export const selectTodosVisible = createSelector(
  [selectTodosReducer],
  ({ visible }): boolean => visible
);

export const selectTodoFilter = createSelector(
  [selectRouter],
  ({ location }): Filter => {
    let filter = location.pathname.replace(/\//, "") as Filter;
    if (!filter.length) {
      filter = EFilter.ALL;
    }
    return filter;
  }
);

export const selectVisibleTodos = createSelector(
  [selectTodosReducer, selectTodoFilter],
  (state: ITodosState, filter: Filter) => {
    const ids = state.idsByFilter[filter];
    return ids.map(id => state.byId[id]);
  }
);
