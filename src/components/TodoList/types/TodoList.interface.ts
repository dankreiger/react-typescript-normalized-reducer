import { ITodo, ITodosAction } from "redux/todos";
import { AnyAction } from "redux";
import { Filter } from "components/FilterLink";

export interface ITodoListConnectProps {
  todos: ITodo[];
  visible: boolean;
  filter: Filter;
  isFetching: boolean;
}
export interface ITodoListProps extends ITodoListConnectProps {
  fetchTodosBegin: (filter: Filter) => ITodosAction;
}
