import { FilterLinkPath } from "./FilterLink.type";
import { IHandleTodosFilterAction } from "../../redux/todos";

export interface IFilterLinkProps {
  filter: FilterLinkPath;
  handleTodosFilter: (filter: FilterLinkPath) => IHandleTodosFilterAction;
  children: string;
  activeRoute: FilterLinkPath;
}
