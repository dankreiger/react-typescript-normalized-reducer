import { ETodosActionTypes } from "./todos.enum";
import { TodoAction } from "./todos.type";

export const todoUtil = (state: any = [], action: TodoAction) => {
  switch (action.type) {
    case ETodosActionTypes.addTodo:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case ETodosActionTypes.toggleTodo:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};
