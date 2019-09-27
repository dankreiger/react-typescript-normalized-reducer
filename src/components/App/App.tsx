import React, { FC } from "react";
import { Route } from "react-router-dom";
import TodoFilters from "../TodoFilters/TodoFilters";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "components/TodoList/TodoList";

export const App: FC = (): JSX.Element => {
  return (
    <>
      <TodoForm />
      <TodoFilters />

      <Route exact path="/:filter?" component={TodoList} />
    </>
  );
};

export default App;
