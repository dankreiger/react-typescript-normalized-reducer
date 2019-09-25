import React, { FC } from "react";
import FilterLink from "../FilterLink/FilterLink";
import { TodoFiltersContainer } from "./TodoFilters.styles";
import { EFilterPath } from "../FilterLink/FilterLink.enum";
const TodoFilters: FC = () => (
  <TodoFiltersContainer>
    <FilterLink filter={EFilterPath.ALL}>All</FilterLink>
    <FilterLink filter={EFilterPath.ACTIVE}>Active</FilterLink>
    <FilterLink filter={EFilterPath.COMPLETED}>Completed</FilterLink>
  </TodoFiltersContainer>
);

export default TodoFilters;
