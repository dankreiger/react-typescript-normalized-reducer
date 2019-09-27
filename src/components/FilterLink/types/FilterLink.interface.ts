import { Filter } from "./FilterLink.type";
import { ITodosAction } from "redux/todos";

export interface IFilterLinkProps {
  filter: Filter;
  handleTodosFilter: (filter: Filter) => ITodosAction;
  children: string;
  activeFilter: Filter;
  error: any;
}
