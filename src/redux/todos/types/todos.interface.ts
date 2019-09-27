import { TodoId, TodoText } from "..";
import { Filter } from "components/FilterLink";
import { ETodosActionTypes } from "./todos.enum";

// experimenting with non-nested data
export interface ITodosState {
  byId: ITodoDictionary;
  listByFilter: ITodosListByFilterState;
  visible: boolean;
}

export interface ITodosListByFilterState {
  [Filter: string]: TodoId[];
}

export interface ITodo {
  id: TodoId;
  text: TodoText;
  completed?: boolean;
}

export interface ITodoDictionary {
  [id: string]: ITodo;
}

export interface ITodosAction {
  type: ETodosActionTypes;
  filter: Filter;
}
export interface ITodosResponseAction extends ITodosAction {
  response: ITodo[];
}

export interface ITodosSuccessPayload {
  response: ITodo[];
  filter: Filter;
}
