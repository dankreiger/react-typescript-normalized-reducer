import { ITodo, TodoId, IToggleTodoAction } from "../../redux/todos/";
import { IRouterMatch } from "../../Root";

export interface ITodoListProps {
  todos: ITodo[];
  match: IRouterMatch;
  visible: boolean;
  toggleTodo: (id: TodoId) => IToggleTodoAction;
}
