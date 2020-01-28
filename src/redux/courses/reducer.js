const initialState = {
  coursesList: [],
  addCourseRequest: {
    isPending: false,
    isFullfilled: false,
    isCancelled: false
  },
  getCoursesRequestStatus: {
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
      const { getCoursesRequestStatus } = payload;

      return {
        ...state,
        getCoursesRequestStatus
      };
    }
    case "GET_COURSES_REQUEST": {
      const { getCoursesRequestStatus } = payload;
      return {
        ...state,
        getCoursesRequestStatus
      };
    }

    case "GET_COURSES_SUCCESS": {
      const { coursesData, getCoursesRequestStatus } = payload;
      return {
        ...state,
        coursesList: coursesData,
        getCoursesRequestStatus
      };
    }

    case "GET_COURSES_FAILURE": {
      const { getCoursesRequestStatus } = payload;
      return {
        ...state,
        getCoursesRequestStatus
      };
    }

    case "ADD_COURSE_REQUEST": {
      const { addCourseRequest } = payload;
      return {
        ...state,
        addCourseRequest
      };
    }

    case "ADD_COURSE_SUCCESS": {
      const { addCourseRequest } = payload;
      return {
        ...state,
        addCourseRequest
      };
    }

    case "ADD_COUSE_FAILURE": {
      const { addCourseRequest } = payload;
      return {
        ...state,
        addCourseRequest
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
      const {
        course,
        course: { id },
        editCourseStatus
      } = payload;
      let courses = state.coursesList.slice();
      let courseToBeEdited = courses.findIndex(_course => {
        return _course.id === id;
      });
      let editedCourse = { ...course };
      courses[courseToBeEdited] = editedCourse;

      return {
        ...state,
        coursesList: courses,
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
      const { deleteCourseStatus } = payload;
     
      return {
        ...state,
        deleteCourseStatus
      };
    }
    case "DELETE_COURSE_SUCCESS": {
      const { id, deleteCourseStatus } = payload;
      let courses = state.coursesList.slice();
      let index = courses.findIndex(course => {
        return course.id === id;
      });
      if (index !== -1) {
        courses.splice(index, 1);
      }
      
      return {
        ...state,
        coursesList: courses,
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
