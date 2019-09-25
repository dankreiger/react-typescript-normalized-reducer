import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { animated, useTrail } from "react-spring";
import {
  toggleTodo,
  selectTodosVisible,
  selectVisibleTodos,
  ITodo
} from "../../redux/todos";
import Todo from "../Todo/Todo";
import { ITodoListProps } from "./TodoList.interface";
import { IRootReducerState } from "../../redux/root-reducer";
import { TodoListContainer } from "./TodoList.styles";
import { createStructuredSelector } from "reselect";
import { DEFAULT_ANIMATION_DURATION } from "../../utils/style-utils";

const TodoList: FC<ITodoListProps> = ({ todos, visible }) => {
  const [on, toggle] = useState(false);
  useEffect(() => {
    toggle(visible);
  }, [visible]);

  const trail = useTrail(5, {
    opacity: on ? 1 : 0,

    transform: on ? "scale(1)" : "scale(0)",
    config: {
      duration: DEFAULT_ANIMATION_DURATION,
      mass: 1,
      tension: 280,
      friction: 120
    }
  });

  return (
    <TodoListContainer>
      {trail.map((animation, i) => (
        <animated.div key={i} style={animation}>
          <Todo key={todos[i] ? todos[i].id : i} todo={todos[i] || i} />
        </animated.div>
      ))}
    </TodoListContainer>
  );
};

const mapStateToProps = createStructuredSelector<
  IRootReducerState,
  { todos: ITodo[]; visible: boolean }
>({
  todos: selectVisibleTodos,
  visible: selectTodosVisible
});

export default connect(
  mapStateToProps,
  { toggleTodo }
)(TodoList as FC);
