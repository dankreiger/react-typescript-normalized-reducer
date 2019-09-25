import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe("rendering", () => {
    it("renders without crashing", () => {
      expect(wrapper.length).toBe(1);
    });
  });
});
