import { IAddTodoAction, IToggleTodoAction } from ".";
import { IHideTodosAction } from "./todos.interface";

export type TodoInitialState = [];
export type TodoAction = IAddTodoAction | IToggleTodoAction | IHideTodosAction;
export type TodoId = string;
export type TodoText = string;
