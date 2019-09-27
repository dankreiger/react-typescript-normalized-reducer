import { addTodo, toggleTodoBegin } from "../todos.actions";
import { ETodosActionTypes } from "../types/todos.enum";
import uuidv1 from "uuid/v1";

describe("todos actions", () => {
  const mockId = uuidv1();
  describe("addTodo", () => {
    const action = addTodo("Some todo");
    action.id = mockId;
    it("has the correct type", () => {
      expect(action.type).toEqual(ETodosActionTypes.addTodo);
    });

    it("has the correct text", () => {
      expect(action.text).toEqual("Some todo");
    });

    it("has a unique id", () => {
      expect(action.id).toEqual(mockId);
    });
  });

  describe("toggleTodoBegin", () => {
    const action = toggleTodoBegin(mockId);
    it("has the correct type", () => {
      expect(action.type).toEqual(ETodosActionTypes.toggleTodoBegin);
    });

    it("has the correct id", () => {
      expect(action.id).toEqual(mockId);
    });
  });
});
