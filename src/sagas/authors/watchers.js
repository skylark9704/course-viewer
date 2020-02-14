import { GET_AUTHORS } from "./actionTypes";
import { takeLatest } from "redux-saga/effects";
import { getAuthors } from "./workers";

export function* authorsSaga() {
  yield takeLatest(GET_AUTHORS.REQUEST, getAuthors);
}
