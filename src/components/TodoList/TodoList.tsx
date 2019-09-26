import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { animated, useTrail } from "react-spring";
import {
  selectTodosVisible,
  selectVisibleTodos,
  ITodo,
  selectTodoFilter,
  fetchTodosBegin
} from "redux/todos";
import Todo from "../Todo/Todo";
import { ITodoListProps } from "./types/TodoList.interface";
import { IRootReducerState } from "redux/root-reducer";
import { TodoListContainer } from "./TodoList.styles";
import { createStructuredSelector } from "reselect";
import { DEFAULT_ANIMATION_DURATION } from "utils/style-utils";
import { Filter } from "../FilterLink/types/FilterLink.type";
import Spinner from "components/Spinner/Spinner";

const TodoList: FC<ITodoListProps> = ({ visible, todos, fetchTodosBegin }) => {
  const [on, toggle] = useState(false);
  useEffect(() => {
    if (!todos.length) {
      fetchTodosBegin();
    }
  }, [fetchTodosBegin, todos]);

  useEffect(() => {
    toggle(visible);
  }, [visible]);

  const trail = useTrail(todos.length, {
    opacity: on ? 1 : 0,

    transform: on ? "scale(1)" : "scale(0)",
    config: {
      duration: DEFAULT_ANIMATION_DURATION,
      mass: 1,
      tension: 280,
      friction: 120
    }
  });

  // computer is slow, but make this a HOC e.g. `WithSpinner`
  if (todos.length === 0) return <Spinner />;
  return (
    <TodoListContainer>
      {trail.map((animation, i) => (
        <animated.div className="card" key={i} style={animation}>
          <Todo key={todos[i].id} todo={todos[i]} />
        </animated.div>
      ))}
    </TodoListContainer>
  );
};

const mapStateToProps = createStructuredSelector<
  IRootReducerState,
  {
    todos: ITodo[];
    visible: boolean;
    filter: Filter;
  }
>({
  todos: selectVisibleTodos,
  visible: selectTodosVisible,
  filter: selectTodoFilter
});

export default connect(
  mapStateToProps,
  { fetchTodosBegin }
)(TodoList as FC);
