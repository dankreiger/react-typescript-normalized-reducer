import { ITodosState } from "./";
import { createSelector } from "reselect";
import { IRootReducerState } from "redux/root-reducer";
import { Filter, EFilter } from "components/FilterLink";
import * as fromById from "./reducers/byId.reducer";
import * as fromList from "./reducers/createList.reducer";

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

// seems simpler
// export const selectVisibleTodos = createSelector(
//   [selectTodosReducer, selectTodoFilter],
//   (state: ITodosState, filter: Filter) => {
//     const ids = state.listByFilter[filter];
//     return ids.map(id => state.byId[id]);
//   }
// );

export const selectVisibleTodos = createSelector(
  [selectTodosReducer, selectTodoFilter],

  (state: ITodosState, filter: Filter) => {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getTodo(state.byId, id));
  }
);

export const selectIsFetching = createSelector(
  [selectTodosReducer, selectTodoFilter],
  (state: ITodosState, filter: Filter) =>
    fromList.getIsFetching(state.listByFilter[filter])
);
