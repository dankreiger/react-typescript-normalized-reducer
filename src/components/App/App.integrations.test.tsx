import React from "react";
import { App } from "./App";
import { cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const mockProps = {
  addTodo: jest.fn(),
  toggleTodoBegin: jest.fn(),
  todos: [],
  visibilityFilter: "all"
};

describe("App", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = (global as any).renderWithRedux(<App {...mockProps} />);
  });

  afterEach(cleanup);

  describe("behavior", () => {
    it("adds a todo item", async () => {
      const input = wrapper.getByTestId("input");
      fireEvent.change(input, { target: { value: "dog" } });

      expect(input.value).toBe("dog");
      fireEvent.click(wrapper.getByText("Add Todo"));
      expect(mockProps.addTodo).toHaveBeenCalled();
    });
  });
});
