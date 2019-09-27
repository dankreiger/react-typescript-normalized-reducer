import axios from "axios";
import { Filter, EFilter } from "../components/FilterLink";
import { ITodo } from "../redux/todos";

/**
 *  @todo: make requests abortable
 *  can be gracefully done with rxjs `switchMap` e.g redux-observable, but find saga solution for learning sake
 *  - can be done with axios cancel token
 *  - can be done with fetch API `AbortController`, but cross-browser support isn't great
 *  - can be done with XMLHttpRequest `abort()`- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort
 */

const apiUrl = "http://localhost:4000/todos";
export const fetchTodos = async (filter: Filter) => {
  try {
    const response = await axios.get(apiUrl);
    const data: ITodo[] = await response.data;
    switch (filter) {
      case EFilter.ALL:
        return data;
      case EFilter.ACTIVE:
        return data.filter(t => !t.completed);
      case EFilter.COMPLETED:
        return data.filter(t => t.completed);
      default:
        return data;
    }
  } catch (err) {
    console.error("fetchTodos error: ", err);
  }
};

export const addTodo = async (todo: ITodo) => {
  try {
    const response = await axios.post(apiUrl, todo);
    console.log(response);
  } catch (err) {
    console.error("addTodo error: ", err);
  }
};
