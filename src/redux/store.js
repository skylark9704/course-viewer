import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import ReduxThunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension";
import { courseReducer as courses } from "./courses/reducer";
import { authorReducer as authors } from "./authors/reducer";
import createSagaMiddleware from "redux-saga";

// Sagas
import * as sagas from "../sagas";

const rootReducer = combineReducers({
  authors,
  courses
});

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware, ReduxThunk),
    devToolsEnhancer({ trace: true })
  )
);

Object.values(sagas).forEach(saga => sagaMiddleware.run(saga));
export default store;
