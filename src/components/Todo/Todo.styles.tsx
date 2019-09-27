import styled from "styled-components";

import { ITodoItemProps } from "./types/Todo.interface";

const todoItemAttrs = { "data-testid": "todo", className: "card" };
export const TodoItem = styled.div.attrs(todoItemAttrs)<ITodoItemProps>`
  cursor: pointer;
  transition: background-color 250ms, box-shadow 250ms;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  background-color: ${({ completed }) => (completed ? "#ddd" : "#fff")};
  ${({ completed }) =>
    completed &&
    `box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 1px 1px -2px rgba(0,0,0,0.12), 0 1px 2px 0 rgba(0,0,0,0.2);`}
  padding: 20px;
  &.active {
    box-shadow: none;
  }
`;
