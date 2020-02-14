import {
  GET_COURSES,
  DELETE_COURSE,
  ADD_COURSE,
  EDIT_COURSE
} from "./actionTypes";
import { takeLatest } from "redux-saga/effects";
import { getCourses, deleteCourse, addCourse, editCourse } from "./workers";

export function* coursesSaga() {
  yield takeLatest(GET_COURSES.REQUEST, getCourses);
  yield takeLatest(DELETE_COURSE.REQUEST, deleteCourse);
  yield takeLatest(ADD_COURSE.REQUEST, addCourse);
  yield takeLatest(EDIT_COURSE.REQUEST, editCourse);
  yield takeLatest(DELETE_COURSE.SUCCESS, getCourses);
  yield takeLatest(ADD_COURSE.SUCCESS, getCourses);
  yield takeLatest(EDIT_COURSE.SUCCESS, getCourses);
}
