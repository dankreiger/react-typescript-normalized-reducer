import { ITodosAction, TodoText } from "redux/todos";

export interface ITodoFormProps {
  addTodoBegin: (text: TodoText) => ITodosAction;
}
