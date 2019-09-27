import { Store, Dispatch, AnyAction } from "redux";

export const logger = (store: Store) => (next: Dispatch) => (
  action: AnyAction
) => {
  if (!console.group) {
    return next;
  }
  console.group(action.type);
  console.log("%c prev state", "color: gray", store.getState());
  console.log("%c action state", "color: blue", action);
  const returnValue = next(action);
  console.log("%c next state", "color: green", store.getState());
  console.groupEnd();
  return returnValue;
};
