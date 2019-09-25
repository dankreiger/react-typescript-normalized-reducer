import { ETodosActionTypes, TodoId, TodoText } from ".";
import { FilterLinkPath } from "../../components/FilterLink/FilterLink.type";

// experimenting with non-nested data
export interface ITodosReducerState {
  byId: ITodoDictionary;
  allIds: TodoId[];
  visible: boolean;
}

export interface ITodo {
  id: TodoId;
  text: TodoText;
  completed?: boolean;
}

export interface ITodoDictionary {
  [id: string]: ITodo;
}

export interface IAddTodoAction {
  type: ETodosActionTypes.addTodo;
  text: TodoText;
  id: TodoId;
}

export interface IToggleTodoAction {
  type: ETodosActionTypes.toggleTodo;
  id: TodoId;
}

export interface IHideTodosAction {
  type: ETodosActionTypes.hideTodos;
}

export interface IShowTodosAction {
  type: ETodosActionTypes.showTodos;
}
export interface IHandleTodosFilterAction {
  type: ETodosActionTypes.handleTodosFilter;
  path: FilterLinkPath;
}
