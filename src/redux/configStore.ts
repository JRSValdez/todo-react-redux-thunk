import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "./reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
  );
  return store;
};

export default configStore;
