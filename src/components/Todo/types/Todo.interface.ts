import { ITodo, TodoId } from "redux/todos";
import { AnyAction } from "redux";

export interface ITodoProps {
  todo: ITodo;
  toggleTodoBegin: (id: TodoId) => AnyAction;
}

export interface ITodoItemProps {
  completed?: boolean;
}
