import {
  IAddTodoAction,
  IHideTodosAction,
  IToggleTodoAction,
  IShowTodosAction,
  ETodosActionTypes,
  TodoText,
  TodoId
} from "./";
import uuidv1 from "uuid/v1";
import { IHandleTodosFilterAction } from "./todos.interface";
import { FilterLinkPath } from "../../components/FilterLink/FilterLink.type";

export const addTodo = (text: TodoText): IAddTodoAction => ({
  type: ETodosActionTypes.addTodo,
  text,
  id: uuidv1()
});

export const toggleTodo = (id: TodoId): IToggleTodoAction => ({
  type: ETodosActionTypes.toggleTodo,
  id
});

export const hideTodos = (): IHideTodosAction => ({
  type: ETodosActionTypes.hideTodos
});

export const showTodos = (): IShowTodosAction => ({
  type: ETodosActionTypes.showTodos
});

export const handleTodosFilter = (
  filter: FilterLinkPath
): IHandleTodosFilterAction => ({
  type: ETodosActionTypes.handleTodosFilter,
  path: filter
});
