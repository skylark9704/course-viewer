import {
  GET_COURSES,
  ADD_COURSE,
  DELETE_COURSE,
  EDIT_COURSE
} from "./actionTypes";

const getCoursesReset = () => {
  return {
    type: GET_COURSES.RESET,
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
    type: GET_COURSES.REQUEST
  };
};

const getCoursesPending = () => {
  return {
    type: GET_COURSES.PENDING,
    payload: {
      getCoursesStatus: {
        isPending: true,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};

const getCoursesSuccess = courses => {
  return {
    type: GET_COURSES.SUCCESS,
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
    type: GET_COURSES.FAILURE,
    payload: {
      getCoursesStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: true
      }
    }
  };
};

const addCourseReset = () => {
  return {
    type: ADD_COURSE.RESET,
    payload: {
      addCourseStatus: {
        isPending: false,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};

const addCourseRequest = course => {
  return {
    type: ADD_COURSE.REQUEST,
    payload: {
      course
    }
  };
};

const addCoursePending = () => {
  return {
    type: ADD_COURSE.PENDING,
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
    type: ADD_COURSE.SUCCESS,
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
    type: ADD_COURSE.FAILURE,
    payload: {
      addCourseStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: true
      }
    }
  };
};

const editCourseReset = () => {
  return {
    type: EDIT_COURSE.RESET,
    payload: {
      editCourseStatus: {
        isPending: false,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};

const editCourseRequest = course => {
  return {
    type: EDIT_COURSE.REQUEST,
    payload: { course }
  };
};

const editCoursePending = () => {
  return {
    type: EDIT_COURSE.PENDING,
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
    type: EDIT_COURSE.SUCCESS,
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
    type: EDIT_COURSE.FAILURE,
    payload: {
      editCourseStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: false
      }
    }
  };
};

const deleteCourseRequest = id => {
  return {
    type: DELETE_COURSE.REQUEST,
    payload: {
      id
    }
  };
};

const deleteCourseReset = () => {
  return {
    type: DELETE_COURSE.RESET,
    payload: {
      deleteCourseStatus: {
        isPending: false,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};

const deleteCoursePending = () => {
  return {
    type: DELETE_COURSE.PENDING,
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
    type: DELETE_COURSE.SUCCESS,
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
    type: DELETE_COURSE.FAILURE,
    payload: {
      deleteCourseStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: true
      }
    }
  };
};

const GET = {
  REQUEST: getCoursesRequest,
  PENDING: getCoursesPending,
  SUCCESS: getCoursesSuccess,
  FAILURE: getCoursesFailure,
  RESET: getCoursesReset
};

const ADD = {
  REQUEST: addCourseRequest,
  PENDING: addCoursePending,
  SUCCESS: addCourseSuccess,
  FAILURE: addCourseFailure,
  RESET: addCourseReset
};

const DELETE = {
  REQUEST: deleteCourseRequest,
  PENDING: deleteCoursePending,
  SUCCESS: deleteCourseSuccess,
  FAILURE: deleteCourseFailure,
  RESET: deleteCourseReset
};

const EDIT = {
  REQUEST: editCourseRequest,
  PENDING: editCoursePending,
  SUCCESS: editCourseSuccess,
  FAILURE: editCourseFailure,
  RESET: editCourseReset
};

export { GET, ADD, DELETE, EDIT };
