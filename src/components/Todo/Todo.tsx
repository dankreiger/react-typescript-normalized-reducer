import React, { FC } from "react";
import { TodoItem } from "./Todo.styles";
import { ITodoProps } from "./types/Todo.interface";

const Todo: FC<ITodoProps> = ({ todo }): JSX.Element => {
  return (
    <TodoItem
      //onClick={() => toggleTodo(todo.id)}
      completed={todo.completed}
    >
      {todo.text}
    </TodoItem>
  );
};

export default Todo;
