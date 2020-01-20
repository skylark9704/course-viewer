import { createStore } from "redux";
import courseReducer from './reducers'
import { devToolsEnhancer } from 'redux-devtools-extension';

let store = createStore(courseReducer, devToolsEnhancer());

export default store;
