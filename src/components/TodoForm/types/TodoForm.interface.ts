import { TodoText, ITodosAction } from "redux/todos";
import { AnyAction } from "redux";

export interface ITodoFormProps {
  addTodo: (text: TodoText) => ITodosAction;
  fetchTodosBegin: () => AnyAction;
}
