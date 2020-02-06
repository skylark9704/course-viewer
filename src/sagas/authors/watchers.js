import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { GET } from "./actions";
import { GET_AUTHORS } from "./actionTypes";

export function* getAuthors() {
  const { SUCCESS, FAILURE, PENDING, RESET } = GET;
  yield put(PENDING());
  try {
    const authors = yield call(axios.get, "http://localhost:3001/authors");
    yield put(SUCCESS(authors.data));
  } catch (error) {
    yield put(FAILURE());
  } finally {
    RESET();
  }
}

export function* authorsSaga() {
  yield takeLatest(GET_AUTHORS.REQUEST, getAuthors);
}
