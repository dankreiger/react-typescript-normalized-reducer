import { TodoText, IAddTodoAction } from "../../redux/todos";

export interface ITodoFormProps {
  addTodo: (text: TodoText) => IAddTodoAction;
}
