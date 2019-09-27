import React from "react";
import { Provider } from "react-redux";
import store, { history } from "./redux/store";
import App from "./components/App/App";
import { ConnectedRouter } from "connected-react-router";

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default Root;
