import axios from "axios";
import {
  ADD_COURSE,
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  GET_AUTHORS_REQUEST,
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_FAILURE
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

const getCoursesRequest = () => {
  return {
    type: GET_COURSES_REQUEST,
    payload: {
      loading: true
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
        axios.get("http://localhost:3001/authors").then(response => {
          courseData.map(course => {
            let authorName = response.data.filter(author => {
              if (author.id === course.authorId) return author.name;
              return null;
            });

            return (course.authorName = authorName[0].name);
          });
          dispatch(getCoursesSuccess(courseData));
        }).catch(error => {
          dispatch(getCoursesSuccess(courseData));
        })
      })
      .catch(err => {
        const error = err.message;
        dispatch(getCoursesFailure(error));
      });
  };
};

const getAuthorsSuccess = data => {
  return {
    type: GET_AUTHORS_SUCCESS,
    payload: {
      loading: false,
      authorsData: data
    }
  };
};

const getAuthorsFailure = error => {
  return {
    type: GET_AUTHORS_FAILURE,
    payload: {
      loading: false,
      error
    }
  };
};

const getAuthorsRequest = () => {
  return {
    type: GET_AUTHORS_REQUEST,
    payload: {
      loading: true
    }
  };
};

const getAuthors = () => {
  return function(dispatch) {
    dispatch(getAuthorsRequest());
    axios
      .get("http://localhost:3001/authors")
      .then(response => {
        const authorsData = response.data;
        dispatch(getAuthorsSuccess(authorsData));
      })
      .catch(err => {
        const error = err.message;
        dispatch(getAuthorsFailure(error));
      });
  };
};

export { addCourse, getCourses, getAuthors };
