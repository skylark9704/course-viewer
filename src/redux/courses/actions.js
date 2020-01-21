import axios from "axios";

import {
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILURE
} from "./actionTypes";
import { getAuthorsSuccess } from "../../redux/authors/actions";

const getCoursesRequest = () => {
  return {
    type: GET_COURSES_REQUEST,
    payload: {
      loading: true
    }
  };
};

const getCoursesSuccess = data => {
  return {
    type: GET_COURSES_SUCCESS,
    payload: {
      loading: false,
      coursesData: data
    }
  };
};

const getCoursesFailure = error => {
  return {
    type: GET_COURSES_FAILURE,
    payload: {
      loading: false,
      error
    }
  };
};

const getCourses = () => {
  return function(dispatch) {
    dispatch(getCoursesRequest());
    axios
      .get("http://localhost:3001/courses")
      .then(response => {
        const courseData = response.data;
        axios
          .get("http://localhost:3001/authors")
          .then(response => {
            courseData.map(course => {
              const authors = response.data;
              dispatch(getAuthorsSuccess(authors));
              const authorName = authors.filter(author => {
                if (author.id === course.authorId) return author.name;
                return null;
              });

              return (course.authorName = authorName[0].name);
            });
            dispatch(getCoursesSuccess(courseData));
          })
          .catch(error => {
            dispatch(getCoursesSuccess(courseData));
          });
      })
      .catch(err => {
        const error = err.message;
        dispatch(getCoursesFailure(error));
      });
  };
};

const addCourseRequest = () => {
  return {
    type: ADD_COURSE_REQUEST,
    payload: {
      addCourseRequest: {
        isPending: true,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};

const addCourseSuccess = () => {
  return {
    type: ADD_COURSE_SUCCESS,
    payload: {
      addCourseRequest: {
        isPending: false,
        isFullfilled: true,
        isCancelled: false
      }
    }
  };
};

const addCourseFailure = () => {
  return {
    type: ADD_COURSE_FAILURE,
    payload: {
      addCourseRequest: {
        isPending: false,
        isFullfilled: true,
        isCancelled: true
      }
    }
  };
};

const addCourse = course => {
  console.log(course);
  return function(dispatch) {
    dispatch(addCourseRequest());
    console.log("Adding Course");
    axios
      .post("http://localhost:3001/courses/", { ...course })
      .then(response => {
        console.log("Add Course Response", response.data);
        if (response.data) {
          dispatch(addCourseSuccess());
        } else {
          dispatch(addCourseFailure());
        }
      })
      .catch(error => {
        console.log("Add Course Error", error);
        dispatch(addCourseFailure());
      });
  };
};

export { getCourses, addCourse };
