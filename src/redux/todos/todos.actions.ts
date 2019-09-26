import {
  ETodosActionTypes as TodoActionType,
  ITodosAction,
  ITodosSuccessPayload,
  ITodosResponseAction
} from "./";
import { AnyAction } from "redux";
import { Filter } from "components/FilterLink";

export const fetchTodosBegin = (): AnyAction => ({
  type: TodoActionType.fetchTodosBegin
});

export const showTodos = (): AnyAction => ({
  type: TodoActionType.showTodos
});

export const hideTodos = (): AnyAction => ({
  type: TodoActionType.hideTodos
});

export const fetchTodosSuccess = (
  payload: ITodosSuccessPayload
): ITodosResponseAction => ({
  type: TodoActionType.fetchTodosSuccess,
  response: payload.response,
  filter: payload.filter
});

export const handleTodosFilter = (filter: Filter): ITodosAction => ({
  type: TodoActionType.handleTodosFilter,
  filter
});
