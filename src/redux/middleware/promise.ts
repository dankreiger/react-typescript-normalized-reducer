import { Store, Dispatch, AnyAction } from "redux";

export const promise = (store: Store) => {
  return (next: Dispatch) => (action: AnyAction) => {
    if (typeof action.then === "function") {
      return action.then(next);
    }
    return next(action);
  };
};
