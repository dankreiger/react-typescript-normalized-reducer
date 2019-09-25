import React, { FC } from "react";
import { connect } from "react-redux";
import { TodoItem } from "./Todo.styles";
import { ITodoProps } from "./Todo.interface";
import { toggleTodo } from "../../redux/todos";

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
