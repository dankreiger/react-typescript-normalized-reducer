import { ITodoDictionary, ETodosActionTypes, TodoAction } from "./";
import { combineReducers } from "redux";
import { TodoId } from "./todos.type";
import {
  ITodosReducerState,
  IHideTodosAction,
  IShowTodosAction
} from "./todos.interface";
import { todoUtil } from "./todos.reducer.utils";

const byId = (state: ITodoDictionary = {}, action: TodoAction) => {
  switch (action.type) {
    case ETodosActionTypes.addTodo:
    case ETodosActionTypes.toggleTodo:
      return {
        ...state,
        [action.id]: todoUtil(state[action.id], action)
      };
    default:
      return state;
  }
};

const allIds = (state: TodoId[] = [], action: TodoAction) => {
  switch (action.type) {
    case ETodosActionTypes.addTodo:
      return [...state, action.id];
    default:
      return state;
  }
};

export const visible = (
  state = true,
  action: IHideTodosAction | IShowTodosAction
) => {
  switch (action.type) {
    case ETodosActionTypes.hideTodos:
      return false;
    case ETodosActionTypes.showTodos:
      return true;
    default:
      return state;
  }
};

export const todosReducer = combineReducers<ITodosReducerState>({
  byId,
  allIds,
  visible
});
