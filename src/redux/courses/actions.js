import axios from "axios";

import {
  GET_COURSES_RESET,
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  ADD_COURSE_RESET,
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILURE,
  EDIT_COURSE_RESET,
  EDIT_COURSE_REQUEST,
  EDIT_COURSE_SUCCESS,
  EDIT_COURSE_FAILURE,
  DELETE_COURSE_RESET,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  DELETE_COURSE_FAILURE
} from "./actionTypes";
import {
  getAuthorsSuccess,
  getAuthorsRequest
} from "../../redux/authors/actions";

const getCoursesReset = () => {
  return {
    type: GET_COURSES_RESET,
    payload: {
      getCoursesStatus: {
        isPending: false,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};
const getCoursesRequest = () => {
  return {
    type: GET_COURSES_REQUEST,
    payload: {
      getCoursesStatus: {
        isPending: true,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};

const getCoursesSuccess = (courses) => {
  return {
    type: GET_COURSES_SUCCESS,
    payload: {
      getCoursesStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: false
      },
      coursesData: courses
    }
  };
};

const getCoursesFailure = () => {
  return {
    type: GET_COURSES_FAILURE,
    payload: {
      getCoursesStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: true
      }
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
        dispatch(getAuthorsRequest());
        axios
          .get("http://localhost:3001/authors")
          .then(response => {
            const authors = response.data;
            dispatch(getAuthorsSuccess(authors));
            courseData.forEach(course => {
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

const addCourseReset = () => {
  return {
    type:ADD_COURSE_RESET,
    payload: {
      addCourseStatus: {
        isPending: false,
        isFullfilled: false,
        isCancelled: false
      }
    }
  }
}

const addCourseRequest = () => {
  return {
    type: ADD_COURSE_REQUEST,
    payload: {
      addCourseStatus: {
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
      addCourseStatus: {
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
      addCourseStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: true
      }
    }
  };
};

const addCourse = (course) => {

  return function(dispatch) {
    dispatch(addCourseRequest());
    console.log("Adding Course");
    axios
      .post("http://localhost:3001/courses/", { ...course })
      .then(response => {
        console.log("Add Course Response", response.data);
        if (response.data) {
          dispatch(addCourseSuccess());
          dispatch(getCourses())
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

const editCourseReset = () => {
  return {
    type: EDIT_COURSE_RESET,
    payload: {
      editCourseStatus: {
        isPending: false,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};

const editCourseRequest = () => {
  return {
    type: EDIT_COURSE_REQUEST,
    payload: {
      editCourseStatus: {
        isPending: true,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};

const editCourseSuccess = () => {
  return {
    type: EDIT_COURSE_SUCCESS,
    payload: {
      editCourseStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: false
      }
    }
  };
};

const editCourseFailure = () => {
  return {
    type: EDIT_COURSE_FAILURE,
    payload: {
      editCourseStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: false
      }
    }
  };
};

const editCourse = (course) => {
  return function(dispatch) {
    dispatch(editCourseRequest());

    axios.put(`http://localhost:3001/courses/${course.id}`,{...course})
    .then(response => {
      dispatch(editCourseSuccess(response.data));
      dispatch(getCourses())
    })
    .catch(error => {
      dispatch(editCourseFailure())
    })
    
  };
};

const deleteCourseReset = () => {
  return {
    type: DELETE_COURSE_RESET,
    payload: {
      deleteCourseStatus: {
        isPending: false,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};

const deleteCourseRequest = () => {
  return {
    type: DELETE_COURSE_REQUEST,
    payload: {
      deleteCourseStatus: {
        isPending: true,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};

const deleteCourseSuccess = () => {
  return {
    type: DELETE_COURSE_SUCCESS,
    payload: {
      deleteCourseStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: false
      }
    }
  };
};

const deleteCourseFailure = () => {
  return {
    type: DELETE_COURSE_FAILURE,
    payload: {
      deleteCourseStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: true
      }
    }
  };
};
const deleteCourse = (id) => {
  return function(dispatch) {
    dispatch(deleteCourseRequest());
    axios.delete(`http://localhost:3001/courses/${id}`).then((response) => {
      dispatch(deleteCourseSuccess())
      dispatch(getCourses())
    })
    .catch((error) => {
      dispatch(deleteCourseFailure())
    })
    
  };
};

export {
  getCourses,
  getCoursesReset,
  addCourse,
  addCourseReset,
  editCourse,
  editCourseReset,
  deleteCourse,
  deleteCourseReset
};
