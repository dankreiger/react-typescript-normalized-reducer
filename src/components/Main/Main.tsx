import React, { FC } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { withRouter } from "react-router";
import { MainContainer } from "./Main.styles";
import { IRootRouterProps } from "../../Root";

const Main: FC<IRootRouterProps> = (props: IRootRouterProps) => (
  <MainContainer>
    <TodoForm />
    <TodoList />
  </MainContainer>
);

export default withRouter(Main as FC);
