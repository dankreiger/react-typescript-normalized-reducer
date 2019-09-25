import React from "react";
import { Provider } from "react-redux";
import { RouteComponentProps, match } from "react-router-dom";
import store, { history } from "./redux/store";
import App from "./components/App/App";
import {
  FilterLinkType,
  FilterLinkPath
} from "./components/FilterLink/FilterLink.type";
import { ConnectedRouter } from "connected-react-router";

export interface IRouterMatch extends match<PathParamsType> {
  params: {
    filter: FilterLinkType;
  };
  path: FilterLinkPath;
}

type PathParamsType = {
  filter: FilterLinkType;
};

export interface IRootRouterProps extends RouteComponentProps {
  match: IRouterMatch;
}

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default Root;
