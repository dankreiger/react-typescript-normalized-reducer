import { TodoText, ITodosAction } from "redux/todos";

export interface ITodoFormProps {
  addTodo: (text: TodoText) => ITodosAction;
}
