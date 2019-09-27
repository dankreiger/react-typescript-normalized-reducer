import deepFreeze from "deep-freeze";
import {
  todos,
  todosReducerInitialState,
  addTodo,
  toggleTodo,
  TodoInitialState,
  ITodo
} from "../";
import uuidv1 from "uuid/v1";

describe("todos reducer", () => {
  let initialState: TodoInitialState;
  const mockId = uuidv1();

  beforeEach(() => {
    initialState = todosReducerInitialState;
  });

  test("addTodo", () => {
    const stateBefore = initialState;
    const action = addTodo("Some todo");
    action.id = mockId;
    const stateAfter = [{ id: mockId, text: "Some todo", completed: false }];

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });

  test("toggleTodo", () => {
    const stateBefore: ITodo[] = [
      ...initialState,
      { id: "0", text: "Some todo", completed: false },
      { id: "1", text: "Another todo", completed: false }
    ];
    const action = toggleTodo("1");

    const stateAfter: ITodo[] = [
      { id: "0", text: "Some todo", completed: false },
      { id: "1", text: "Another todo", completed: true }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });
});
