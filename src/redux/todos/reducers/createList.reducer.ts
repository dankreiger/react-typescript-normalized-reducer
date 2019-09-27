import { Filter } from "components/FilterLink";
import {
  TodoId,
  ETodosActionTypes as TodoActionType,
  ITodosResponseAction
} from "../";

const createList = (filter: Filter) => {
  return (state: TodoId[] = [], action: ITodosResponseAction) => {
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
};

export default createList;

export const getIds = (state: TodoId[]) => state;
