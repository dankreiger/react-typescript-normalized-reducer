import { ITodosState, ITodosListByFilterState } from "..";
import { combineReducers } from "redux";
import { EFilter, Filter } from "../../../components/FilterLink";
import byId, * as fromById from "./byId.reducer";
import visible, * as fromVisible from "./visible.reducer";
import createList, * as fromList from "./createList.reducer";

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

export const getVisibleTodos = (state: ITodosState, filter: Filter) => {
  const ids = fromList.getIds(state.listByFilter[filter]);
  return ids.map(id => fromById.getTodo(state.byId, id));
};
