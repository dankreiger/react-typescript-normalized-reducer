import axios, {
  CancelTokenSource,
  AxiosRequestConfig,
  AxiosInstance
} from "axios";
import { TodoId } from "../redux/todos";
import { CANCEL } from "redux-saga";
const uuidv1 = require("uuid/v1");

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API as string,
  timeout: 5000
});

export function apiService(
  method: "get" | "post" | "put" | "patch" | "delete",
  data = {},
  settings: { source: CancelTokenSource; resourceId?: string }
) {
  const cancelToken = settings.source.token;
  let url = instance.defaults.baseURL;
  if (settings.resourceId) {
    url += `/${settings.resourceId}`;
  }

  const config: AxiosRequestConfig = { method, data, cancelToken, url };
  const promise: any = instance(config);
  promise[CANCEL] = () => settings.source.cancel();
  return promise;
}

export const newTodo = (text: TodoId) => ({
  id: uuidv1(),
  text,
  completed: false
});
