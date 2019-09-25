import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { ITodosReducerState, todosReducer } from "./todos/";
/** TODO: strong type router */
export interface IRootReducerState {
  router: any;
  todosReducer: ITodosReducerState;
}

const rootReducer = (history: any) =>
  combineReducers<IRootReducerState>({
    router: connectRouter(history),
    todosReducer
  });

export default rootReducer;
