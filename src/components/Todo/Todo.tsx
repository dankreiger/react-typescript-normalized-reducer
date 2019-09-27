import React, { FC } from "react";
import { connect } from "react-redux";
import { TodoItem } from "./Todo.styles";
import { toggleTodoBegin } from "redux/todos";
import { ITodoProps } from "./types/Todo.interface";

const Todo: FC<ITodoProps> = ({ todo, toggleTodoBegin }): JSX.Element => {
  return (
    <TodoItem
      onClick={() => toggleTodoBegin(todo.id)}
      completed={todo.completed}
    >
      {todo.text}
    </TodoItem>
  );
};

export default connect(
  null,
  { toggleTodoBegin }
)(Todo);
