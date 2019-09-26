import { ITodosState, ITodosIdsByFilterState } from "..";
import { combineReducers } from "redux";
import { EFilter } from "../../../components/FilterLink";
import byId, * as fromById from "./byId.reducer";
import visible, * as fromVisible from "./visible.reducer";
import createList, * as fromList from "./createList.reducer";

const idsByFilter = combineReducers<ITodosIdsByFilterState>({
  all: createList(EFilter.ALL),
  active: createList(EFilter.ACTIVE),
  completed: createList(EFilter.COMPLETED)
});

export const todos = combineReducers<ITodosState>({
  byId,
  idsByFilter,
  visible
});
