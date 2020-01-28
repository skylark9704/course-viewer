import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import ReduxThunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";
import { courseReducer as courses } from "./courses/reducer";
import { authorReducer as authors } from "./authors/reducer";

const rootReducer = combineReducers({
  authors,
  courses
});

let store = createStore(
  rootReducer,
  compose(applyMiddleware(ReduxThunk), devToolsEnhancer({ trace: true }))
);

export default store;
