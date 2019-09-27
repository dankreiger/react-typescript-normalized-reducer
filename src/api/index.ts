import axios, { CancelTokenSource } from "axios";
import { ITodo, TodoText } from "../redux/todos";
import { CANCEL } from "redux-saga";
const uuidv1 = require("uuid/v1");

const apiUrl = process.env.REACT_APP_API as string;
export function fetchAPI(source: CancelTokenSource) {
  const request: any = axios.get(apiUrl, {
    cancelToken: source.token
  });
  request[CANCEL] = () => source.cancel();
  return request;
}

export const addTodoPost = async (text: TodoText) => {
  alert("alert change won't persist on live db");
  const todo: ITodo = { id: uuidv1(), text, completed: false };

  return axios.post(apiUrl, todo);
};
