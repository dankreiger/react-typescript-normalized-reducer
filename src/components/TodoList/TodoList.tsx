import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { animated, useTrail } from "react-spring";
import {
  selectTodosVisible,
  selectVisibleTodos,
  selectTodoFilter,
  fetchTodosBegin,
  selectIsFetching
} from "redux/todos";
import Todo from "../Todo/Todo";
import {
  ITodoListProps,
  ITodoListConnectProps
} from "./types/TodoList.interface";
import { IRootReducerState } from "redux/root-reducer";
import { TodoListContainer } from "./TodoList.styles";
import { createStructuredSelector } from "reselect";
import { DEFAULT_ANIMATION_DURATION } from "utils/style-utils";
import Spinner from "components/Spinner/Spinner";

const TodoList: FC<ITodoListProps> = ({
  visible,
  isFetching,
  todos,
  filter,
  fetchTodosBegin
}) => {
  const [on, toggle] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!isFetching && !todos.length) {
      fetchTodosBegin(filter);
      setLoading(true);
    }
  }, [fetchTodosBegin, filter, todos]);

  useEffect(() => {
    setLoading(!todos.length);
  }, [todos]);
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
  if (loading) return <Spinner />;
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

const connectProps = {
  todos: selectVisibleTodos,
  visible: selectTodosVisible,
  filter: selectTodoFilter,
  isFetching: selectIsFetching
};
const mapStateToProps = createStructuredSelector<
  IRootReducerState,
  ITodoListConnectProps
>(connectProps);

export default connect(
  mapStateToProps,
  { fetchTodosBegin }
)(TodoList as FC);
