import React, { FC } from "react";
import { connect } from "react-redux";
import { TodoItem } from "./Todo.styles";
import { toggleTodo } from "redux/todos";
import { ITodoProps } from "./types/Todo.interface";

const Todo: FC<ITodoProps> = ({ todo, toggleTodo }): JSX.Element => {
  return (
    <TodoItem onClick={() => toggleTodo(todo.id)} completed={todo.completed}>
      {todo.text}
    </TodoItem>
  );
};

export default connect(
  null,
  { toggleTodo }
)(Todo);
