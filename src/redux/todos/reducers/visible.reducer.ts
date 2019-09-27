import { ETodosActionTypes as TodoActionType } from "../";
import { AnyAction } from "redux";

const visible = (state = true, action: AnyAction) => {
  switch (action.type) {
    case TodoActionType.showTodos:
      return true;
    case TodoActionType.hideTodos:
      return false;
    default:
      return state;
  }
};

export default visible;
