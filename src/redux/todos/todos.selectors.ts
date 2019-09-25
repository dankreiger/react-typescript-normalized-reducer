import { EFilterPath } from "../../components/FilterLink/FilterLink.enum";
import { FilterLinkPath } from "../../components/FilterLink/FilterLink.type";
import { ITodosReducerState, ITodo } from "./todos.interface";
import { createSelector } from "reselect";
import { IRootReducerState } from "../root-reducer";

const getAllTodos = (todosReducer: ITodosReducerState): ITodo[] =>
  todosReducer.allIds.map(id => todosReducer.byId[id]);

const selectTodosReducer = (state: IRootReducerState) => state.todosReducer;
const selectRouter = (state: IRootReducerState) => state.router;

export const selectRouterPathname = createSelector(
  [selectRouter],
  ({ location }): FilterLinkPath => location.pathname
);
export const selectTodosVisible = createSelector(
  [selectTodosReducer],
  ({ visible }): boolean => visible
);

export const getVisibleTodos = (
  state: ITodosReducerState,
  filterPath: FilterLinkPath
) => {
  const allTodos = getAllTodos(state);

  switch (filterPath) {
    case EFilterPath.ALL:
      return allTodos;
    case EFilterPath.COMPLETED:
      return allTodos.filter(t => t.completed);
    case EFilterPath.ACTIVE:
      return allTodos.filter(t => !t.completed);
    default:
      return allTodos;
  }
};

export const selectVisibleTodos = createSelector(
  [selectTodosReducer, selectRouter],
  (todosState, routerState) =>
    getVisibleTodos(todosState, routerState.location.pathname)
);
