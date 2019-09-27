import axios from "axios";
import { ITodo } from "../redux/todos";
import { CANCEL } from "redux-saga";

/**
 *  NOTE: makes requests abortable
 *  - can be done implicitly with rxjs `switchMap` (redux-observable), or explicitly with `takeUntil(action)`
 *  - can be done with axios cancel token
 *  - can be done with fetch API `AbortController`, but cross-browser support isn't great
 *  - can be done with XMLHttpRequest `abort()`- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort
 *
 * Example below uses abort controller with redux saga cancel symbol
 */

export const abortableFetch = (url: string, opts?: any) => {
  const controller = new AbortController();
  const signal = controller.signal;
  // I guess this is nicer with redux observable
  const promise: any = fetch(url, {
    ...opts,
    signal
  });
  promise[CANCEL] = () => controller.abort();
  return promise;
};

export const apiUrl =
  "https://my-json-server.typicode.com/dankreiger/react-typescript-normalized-reducer/todos";

export const localApiUrl = "http://localhost:4000/todos";

export const addTodo = async (todo: ITodo) => {
  alert("alert change won't persist on live db");
  try {
    const response = await axios.post(apiUrl, todo);
    console.log(response);
  } catch (err) {
    console.error("addTodo error: ", err);
  }
};
