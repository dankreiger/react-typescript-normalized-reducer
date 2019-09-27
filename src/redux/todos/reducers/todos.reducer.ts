import { ITodosState, ITodosListByFilterState } from "..";
import { combineReducers } from "redux";
import { EFilter } from "../../../components/FilterLink";
import byId from "./byId.reducer";
import visible from "./visible.reducer";
import createList from "./createList.reducer";

const listByFilter = combineReducers<ITodosListByFilterState>({
  all: createList(EFilter.ALL),
  active: createList(EFilter.ACTIVE),
  completed: createList(EFilter.COMPLETED)
});

export const todos = combineReducers<ITodosState>({
  byId,
  listByFilter,
  visible
});
