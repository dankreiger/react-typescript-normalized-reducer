import { NormalizedSchema } from "normalizr";
import { ITodo } from "./todos.interface";

export type TodoId = string;
export type TodoText = string;
export type NormalizedByIdTodoListDictionary = NormalizedSchema<
  ITodo[],
  TodoId[]
>;
export type NormalizedByIdTodoDictionary = NormalizedSchema<ITodo, TodoId>;
