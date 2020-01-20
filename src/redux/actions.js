import axios from "axios";
import {
  ADD_COURSE,
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE
} from "./actionTypes";

const addCourse = content => {
  return {
    type: ADD_COURSE,
    payload: {
      course: content
    }
  };
};

const getCoursesSuccess = data => {
  return {
    type: GET_COURSES_SUCCESS,
    payload: {
      loading:false,
      coursesData: data
    }
  };
};

const getCoursesFailure = error => {
  return {
    type: GET_COURSES_FAILURE,
    payload: {
      loading:false,
      error
    }
  };
};

const getCoursesRequest = () => {
  return {
    type: GET_COURSES_REQUEST,
    payload: {
      loading:true
    }
  };
};

const getCourses = () => {
  return function(dispatch) {
    dispatch(getCoursesRequest());
    axios
      .get("http://localhost:3001/courses")
      .then(response => {
        const courseData = response.data
        dispatch(getCoursesSuccess(courseData))
      })
      .catch(err => {
        const error = err.message
        dispatch(getCoursesFailure(error))
      });
  };
};

export { addCourse, getCourses };
