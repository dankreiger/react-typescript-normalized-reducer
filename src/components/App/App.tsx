import React, { FC } from "react";

import TodoFilters from "../TodoFilters/TodoFilters";
import AppRoutes from "./App.routes";
import TodoForm from "../TodoForm/TodoForm";

export const App: FC = (): JSX.Element => {
  return (
    <>
      <TodoForm />
      <AppRoutes />
      <TodoFilters />
    </>
  );
};

export default App;
