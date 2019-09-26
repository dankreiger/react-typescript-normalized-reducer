import {
  TodoId,
  ITodoDictionary,
  ETodosActionTypes as TodoActionType,
  ITodosResponseAction
} from "../";

const byId = (
  state: ITodoDictionary = {},
  action: ITodosResponseAction
): ITodoDictionary => {
  switch (action.type) {
    case TodoActionType.fetchTodosSuccess:
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state: ITodoDictionary, id: TodoId) => state[id];
