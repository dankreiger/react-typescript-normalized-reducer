import {
  ETodosActionTypes as TodoActionType,
  ITodosAction,
  ITodosSuccessPayload,
  ITodosResponseAction
} from "./";
import { AnyAction } from "redux";
import { Filter } from "components/FilterLink";

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

export const handleTodosFilter = (filter: Filter): ITodosAction => ({
  type: TodoActionType.handleTodosFilter,
  filter
});
