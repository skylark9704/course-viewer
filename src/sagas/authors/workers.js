import axios from "axios";
import { GET } from "./actions";
import { call, put } from "redux-saga/effects";

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