import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";

import { ITodosState, todos } from "./todos/";
/** TODO: strong type router */
export interface IRootReducerState {
  router: RouterState;
  todos: ITodosState;
}

const rootReducer = (history: any) =>
  combineReducers<IRootReducerState>({
    router: connectRouter(history),
    todos
  });

export default rootReducer;
