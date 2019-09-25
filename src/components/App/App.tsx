import React, { FC } from "react";

import TodoFilters from "../TodoFilters/TodoFilters";
import AppRoutes from "./App.routes";

export const App: FC = (): JSX.Element => {
  return (
    <>
      <AppRoutes />
      <TodoFilters />
    </>
  );
};

export default App;
