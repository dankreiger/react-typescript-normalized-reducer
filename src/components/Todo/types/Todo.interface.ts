import { ITodo, TodoId, ITodosAction } from "redux/todos";

export interface ITodoProps {
  todo: ITodo;

  //toggleTodo: (id: TodoId) => ITodosAction;
}

export interface ITodoItemProps {
  completed?: boolean;
}
