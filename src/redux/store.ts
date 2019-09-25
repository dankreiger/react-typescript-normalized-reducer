import { createStore, applyMiddleware, compose, DeepPartial } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import throttle from "lodash.throttle";
import { createBrowserHistory } from "history";

import invariant from "redux-immutable-state-invariant";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
import { saveState, loadState } from "./localStorage";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [routerMiddleware(history), sagaMiddleware];

let composedEnhancers;
if (process.env.NODE_ENV === "development") {
  middleware.push(invariant() as any);
  composedEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })(
    applyMiddleware(...middleware)
  );
} else {
  composedEnhancers = compose(applyMiddleware(...middleware));
}

const addLoggingToDispatch = (store: any) => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }
  return (action: any) => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action state", "color: blue", action);
    const returnValue = rawDispatch(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd();
    return returnValue;
  };
};

const persistedState: DeepPartial<any> = loadState();
const store = createStore(
  rootReducer(history),
  persistedState,
  composedEnhancers
);

if (process.env.NODE_ENV !== "production") {
  store.dispatch = addLoggingToDispatch(store);
}

store.subscribe(
  throttle(() => {
    const { byId, allIds } = store.getState().todosReducer;

    saveState({
      todosReducer: {
        byId,
        allIds
      }
    });
  }, 1000)
);

sagaMiddleware.run(rootSaga);

export default store;
