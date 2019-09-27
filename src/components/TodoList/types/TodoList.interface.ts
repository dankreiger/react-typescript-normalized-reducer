import { ITodo } from "redux/todos";
import { AnyAction } from "redux";

export interface ITodoListProps {
  todos: ITodo[];
  fetchTodosBegin: () => AnyAction;
  visible: boolean;
}
