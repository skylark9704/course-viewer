import { createStore, applyMiddleware, compose } from "redux";
import courseReducer from "./reducers";
import ReduxThunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";

let store = createStore(
  courseReducer,
  compose(applyMiddleware(ReduxThunk), devToolsEnhancer())
);

export default store;
