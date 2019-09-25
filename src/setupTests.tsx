import React from "react";
import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/root-reducer";

const middlewares: [] = [];

function renderWithRedux(
  ui: any,
  // @ts-ignore
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    // @ts-ignore
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

(global as any).renderWithRedux = renderWithRedux;

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
