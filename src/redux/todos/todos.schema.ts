import { schema } from "normalizr";

// TODO: don't use any please
export const todoSchema: any = new schema.Entity("todos");
export const todoListSchema: any = [todoSchema];
