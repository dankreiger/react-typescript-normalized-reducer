import {
  ETodosActionTypes as TodoActionType,
  ITodosAction,
  ITodosSuccessPayload,
  ITodosResponseAction
} from "./";
import { AnyAction } from "redux";
import { Filter } from "components/FilterLink";
import { ITodosErrorPayload } from "./types/todos.interface";
import {
  TodoId,
  TodoText,
  NormalizedByIdTodoDictionary
} from "./types/todos.type";

export const showTodos = (): AnyAction => ({
  type: TodoActionType.showTodos
});

export const hideTodos = (): AnyAction => ({
  type: TodoActionType.hideTodos
});

export const fetchTodosBegin = (filter: Filter): ITodosAction => ({
  type: TodoActionType.fetchTodosBegin,
  filter
});

export const fetchTodosSuccess = (
  payload: ITodosSuccessPayload
): ITodosResponseAction => ({
  type: TodoActionType.fetchTodosSuccess,
  response: payload.response,
  filter: payload.filter
});

export const fetchTodosFailure = (payload: ITodosErrorPayload) => ({
  type: TodoActionType.fetchTodosFailure,
  error: payload.error,
  filter: payload.filter
});

export const handleTodosFilter = (filter: Filter): ITodosAction => ({
  type: TodoActionType.handleTodosFilter,
  filter
});

export const addTodoBegin = (text: TodoText): AnyAction => ({
  type: TodoActionType.addTodoBegin,
  text
});

export const addTodoSuccess = (response: NormalizedByIdTodoDictionary) => ({
  type: TodoActionType.addTodoSuccess,
  response
});

export const toggleTodoBegin = (id: TodoId): AnyAction => ({
  type: TodoActionType.toggleTodoBegin,
  id
});

export const toggleTodoSuccess = (
  response: NormalizedByIdTodoDictionary
): AnyAction => ({
  type: TodoActionType.toggleTodoSuccess,
  response
});
