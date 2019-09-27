import { Filter } from "components/FilterLink";
import {
  TodoId,
  ETodosActionTypes as TodoActionType,
  ITodosResponseAction
} from "../";
import { AnyAction, combineReducers } from "redux";
import { ITodosIdList } from "../types/todos.interface";

const createList = (filter: Filter) => {
  const ids = (state: TodoId[] = [], action: ITodosResponseAction) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case TodoActionType.fetchTodosSuccess:
        return action.response.map(todo => todo.id);
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
      default:
        return false;
    }
  };

  return combineReducers<ITodosIdList>({
    ids,
    isFetching
  });
};

export default createList;

export const getIds = (state: ITodosIdList) => state.ids;
export const getIsFetching = (state: ITodosIdList) => state.isFetching;
