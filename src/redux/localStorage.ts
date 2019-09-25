export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todosReducer");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todosReducer", serializedState);
  } catch (err) {
    console.log("save state error", err);
  }
};
