import styled from "styled-components";

import { ITodoItemProps } from "./types/Todo.interface";

const todoItemAttrs = { "data-testid": "todo" };
export const TodoItem = styled.div.attrs(todoItemAttrs)<ITodoItemProps>`
  cursor: pointer;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  padding: 20px;
`;
