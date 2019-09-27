import { Filter, EFilter } from "components/FilterLink";
import { TodoId, ETodosActionTypes as TodoActionType } from "../";
import { AnyAction, combineReducers } from "redux";
import { ITodosIdList } from "../types/todos.interface";

const createList = (filter: Filter) => {
  const handleToggle = (state: TodoId[], action: AnyAction) => {
    const { result: toggledId, entities } = action.response;
    const { completed } = entities.todos[toggledId];
    const shouldRemove =
      (completed && filter === EFilter.ACTIVE) ||
      (!completed && filter === EFilter.COMPLETED);
    return shouldRemove ? state.filter(id => id !== toggledId) : state;
  };

  const ids = (state: TodoId[] = [], action: AnyAction) => {
    switch (action.type) {
      case TodoActionType.fetchTodosSuccess:
        return filter === action.filter ? action.response.result : state;
      case TodoActionType.addTodoSuccess:
        return filter !== EFilter.COMPLETED
          ? [...state, action.response.result]
          : state;
      case TodoActionType.toggleTodoSuccess:
        return handleToggle(state, action);
      default:
        return state;
    }
  };
  const isFetching = (state = false, action: AnyAction) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case TodoActionType.fetchTodosBegin:
        return true;
      case TodoActionType.fetchTodosSuccess:
      case TodoActionType.fetchTodosFailure:
        return false;
      default:
        return state;
    }
  };

  const error = (state: any = null, action: AnyAction) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case TodoActionType.fetchTodosBegin:
      case TodoActionType.fetchTodosSuccess:
        return null;
      case TodoActionType.fetchTodosFailure:
        return action.error;
      default:
        return state;
    }
  };

  return combineReducers<ITodosIdList>({
    ids,
    isFetching,
    error
  });
};

export default createList;

export const getIds = (state: ITodosIdList) => state.ids;
export const getIsFetching = (state: ITodosIdList) => state.isFetching;
export const getError = (state: ITodosIdList) => state.error;
