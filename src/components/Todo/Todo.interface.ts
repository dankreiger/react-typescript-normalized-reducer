import { ITodo, TodoId, IToggleTodoAction } from "../../redux/todos";

export interface ITodoProps {
  todo: ITodo;
  toggleTodo: (id: TodoId) => IToggleTodoAction;
}

export interface ITodoItemProps {
  completed?: boolean;
}
