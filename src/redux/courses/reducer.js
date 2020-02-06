const initialState = {
  coursesList: [],
  getCoursesStatus: {
    isPending: false,
    isFullfilled: false,
    isCancelled: false
  },
  addCourseStatus: {
    isPending: false,
    isFullfilled: false,
    isCancelled: false
  },
  editCourseStatus: {
    isPending: false,
    isFullfilled: false,
    isCancelled: false
  },
  deleteCourseStatus: {
    isPending: false,
    isFullfilled: false,
    isCancelled: false
  }
};

const courseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_COURSES_RESET": {
      const { getCoursesStatus } = payload;

      return {
        ...state,
        getCoursesStatus
      };
    }
    case "GET_COURSES_REQUEST": {
      return { ...state };
    }

    case "GET_COURSES_PENDING": {
      const { getCoursesStatus } = payload;

      return {
        ...state,
        getCoursesStatus
      };
    }

    case "GET_COURSES_SUCCESS": {
      const { coursesData, getCoursesStatus } = payload;
      return {
        ...state,
        coursesList: coursesData,
        getCoursesStatus
      };
    }

    case "GET_COURSES_FAILURE": {
      const { getCoursesStatus } = payload;
      return {
        ...state,
        getCoursesStatus
      };
    }

    case "ADD_COURSE_RESET": {
      const { addCourseStatus } = payload;

      return {
        ...state,
        addCourseStatus
      };
    }

    case "ADD_COURSE_REQUEST`": {
      return { ...state };
    }

    case "ADD_COURSE_PENDING": {
      const { addCourseStatus } = payload;
      return {
        ...state,
        addCourseStatus
      };
    }

    case "ADD_COURSE_SUCCESS": {
      const { addCourseStatus } = payload;
      return {
        ...state,
        addCourseStatus
      };
    }

    case "ADD_COUSE_FAILURE": {
      const { addCourseStatus } = payload;
      return {
        ...state,
        addCourseStatus
      };
    }

    case "EDIT_COURSE_RESET": {
      const { editCourseStatus } = payload;
      return {
        ...state,
        editCourseStatus
      };
    }

    case "EDIT_COURSE_REQUEST": {
      return { ...state };
    }

    case "EDIT_COURSE_PENDING": {
      const { editCourseStatus } = payload;
      return {
        ...state,
        editCourseStatus
      };
    }

    case "EDIT_COURSE_SUCCESS": {
      const { editCourseStatus } = payload;

      return {
        ...state,
        editCourseStatus
      };
    }

    case "EDIT_COURSE_FAILURE": {
      const { editCourseStatus } = payload;

      return {
        ...state,
        editCourseStatus
      };
    }

    case "DELETE_COURSE_RESET": {
      const { deleteCourseStatus } = payload;

      return {
        ...state,
        deleteCourseStatus
      };
    }

    case "DELETE_COURSE_REQUEST": {
      return { ...state };
    }

    case "DELETE_COURSE_PENDING": {
      const { deleteCourseStatus } = payload;

      return {
        ...state,
        deleteCourseStatus
      };
    }
    case "DELETE_COURSE_SUCCESS": {
      const { deleteCourseStatus } = payload;

      return {
        ...state,
        deleteCourseStatus
      };
    }

    case "DELETE_COURSE_FAILURE": {
      const { deleteCourseStatus } = payload;

      return {
        ...state,
        deleteCourseStatus
      };
    }

    default: {
      return state;
    }
  }
};

export { courseReducer };
