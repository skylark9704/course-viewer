import { select, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { GET, ADD, DELETE, EDIT } from "./actions";
import { getAuthors } from "../authors/watchers";
import {
  GET_COURSES,
  DELETE_COURSE,
  ADD_COURSE,
  EDIT_COURSE
} from "./actionTypes";

// Selectors
export const getAuthorsFromState = state => state.authors.authorList;

export function* getCourses() {
  const { SUCCESS, FAILURE, PENDING } = GET;

  yield put(PENDING());
  try {
    const courses = yield call(axios.get, "http://localhost:3001/courses");
    yield call(getAuthors);
    const authors = yield select(getAuthorsFromState);
    courses.data.forEach(course => {
      const authorName = authors.filter(author => {
        if (author.id === course.authorId) return author.name;
        return null;
      });

      return (course.authorName = authorName[0].name);
    });
    yield put(SUCCESS(courses.data));
  } catch (error) {
    yield put(FAILURE());
  }
}

function* addCourse(action) {
  const { SUCCESS, FAILURE, RESET, PENDING } = ADD;
  const { course } = action.payload;

  yield put(PENDING());

  try {
    // eslint-disable-next-line
    const response = yield call(
      axios.post,
      "http://localhost:3001/courses/",
      course
    );
    yield put(SUCCESS());
  } catch (error) {
    console.error(error);
    yield put(FAILURE());
  } finally {
    yield put(RESET());
  }
}

function* editCourse(action) {
  const { SUCCESS, FAILURE, PENDING } = EDIT;
  console.log(action);
  const { course } = action.payload;

  yield put(PENDING());

  try {
    // eslint-disable-next-line
    const response = yield call(
      axios.put,
      `http://localhost:3001/courses/${course.id}`,
      course
    );
    yield put(SUCCESS());
  } catch (error) {
    console.error(error);
    yield put(FAILURE());
  }
}

function* deleteCourse(action) {
  const { SUCCESS, FAILURE, RESET, PENDING } = DELETE;
  const { id } = action.payload;

  yield put(PENDING());
  try {
    // eslint-disable-next-line
    const response = yield call(
      axios.delete,
      `http://localhost:3001/courses/${id}`
    );
    yield put(SUCCESS());
  } catch (error) {
    console.error(error);
    yield put(FAILURE());
  } finally {
    yield put(RESET());
  }
}

export function* coursesSaga() {
  yield takeLatest(GET_COURSES.REQUEST, getCourses);
  yield takeLatest(DELETE_COURSE.REQUEST, deleteCourse);
  yield takeLatest(ADD_COURSE.REQUEST, addCourse);
  yield takeLatest(EDIT_COURSE.REQUEST, editCourse);
  yield takeLatest(DELETE_COURSE.SUCCESS, getCourses);
  yield takeLatest(ADD_COURSE.SUCCESS, getCourses);
  yield takeLatest(EDIT_COURSE.SUCCESS, getCourses);
}

