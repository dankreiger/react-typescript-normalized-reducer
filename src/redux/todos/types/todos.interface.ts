import { TodoId, TodoText } from "..";
import { Filter } from "components/FilterLink";
import { ETodosActionTypes } from "./todos.enum";
import { NormalizedByIdTodoListDictionary } from "./todos.type";

// experimenting with non-nested data
export interface ITodosState {
  byId: IByIdTodoDictionary;
  listByFilter: ITodosListByFilterState;
  visible: boolean;
}

export interface ITodosListByFilterState {
  [Filter: string]: ITodosIdList;
}

export interface ITodosIdList {
  ids: TodoId[];
  isFetching: boolean;
  error: any;
}

export interface ITodo {
  id: TodoId;
  text: TodoText;
  completed?: boolean;
}

export interface IByIdTodoDictionary {
  [id: string]: ITodo;
}

export interface ITodosAction {
  type: ETodosActionTypes;
  filter: Filter;
}
export interface ITodosResponseAction extends ITodosAction {
  response: NormalizedByIdTodoListDictionary;
}

export interface ITodosSuccessPayload {
  response: NormalizedByIdTodoListDictionary;
  filter: Filter;
}

export interface ITodosErrorPayload {
  error: any;
  filter: Filter;
}
