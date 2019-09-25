import styled from "styled-components";

import { ITodoItemProps } from "./Todo.interface";

const todoItemAttrs = { "data-testid": "todo" };
export const TodoItem = styled.li.attrs(todoItemAttrs)<ITodoItemProps>`
  cursor: pointer;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;
