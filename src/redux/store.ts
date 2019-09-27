import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";

import invariant from "redux-immutable-state-invariant";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
import { routerMiddleware } from "connected-react-router";
import { logger } from "./middleware/logger";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [routerMiddleware(history), sagaMiddleware];

let composedEnhancers;
if (process.env.NODE_ENV === "development") {
  middleware.push(invariant() as any);
  middleware.push(logger as any);

  composedEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })(
    applyMiddleware(...middleware)
  );
} else {
  composedEnhancers = compose(applyMiddleware(...middleware));
}

// const persistedState = undefined;
const store = createStore(
  rootReducer(history),
  //persistedState,
  composedEnhancers
);

// store.dispatch = addPromiseSupportToDispatch(store);

sagaMiddleware.run(rootSaga);

export default store;
