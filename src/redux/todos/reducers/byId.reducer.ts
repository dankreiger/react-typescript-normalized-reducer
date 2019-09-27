import { TodoId, IByIdTodoDictionary } from "../";
import { AnyAction } from "redux";

const byId = (
  state: IByIdTodoDictionary = {},
  action: AnyAction
): IByIdTodoDictionary => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos
    };
  }
  return state;
};

export default byId;

export const getTodo = (state: IByIdTodoDictionary, id: TodoId) => state[id];
