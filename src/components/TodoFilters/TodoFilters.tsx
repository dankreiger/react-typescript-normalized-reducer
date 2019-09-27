import React, { FC } from "react";
import { TodoFiltersContainer } from "./TodoFilters.styles";
import { EFilter } from "components/FilterLink/";
import FilterLink from "components/FilterLink/FilterLink";
const TodoFilters: FC = () => (
  <TodoFiltersContainer>
    <FilterLink filter={EFilter.ALL}>All</FilterLink>
    <FilterLink filter={EFilter.ACTIVE}>Active</FilterLink>
    <FilterLink filter={EFilter.COMPLETED}>Completed</FilterLink>
  </TodoFiltersContainer>
);

export default TodoFilters;
