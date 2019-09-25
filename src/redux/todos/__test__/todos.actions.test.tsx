import { addTodo, toggleTodo } from "../todos.actions";
import { ETodosActionTypes } from "../todos.enum";
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

  describe("toggleTodo", () => {
    const action = toggleTodo(mockId);
    it("has the correct type", () => {
      expect(action.type).toEqual(ETodosActionTypes.toggleTodo);
    });

    it("has the correct id", () => {
      expect(action.id).toEqual(mockId);
    });
  });
});
