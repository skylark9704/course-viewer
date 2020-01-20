/* eslint-disable default-case */
let initialState = {
  courses: [],
  authors: [],
  loading: false
};
const courseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_COURSE":
      let { course } = payload;
      let { courses } = state;
      let newCourses = courses.slice();
      newCourses.push(course);

      return {
        ...state,
        courses: newCourses
      };

    case "GET_COURSES_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "GET_COURSES_SUCCESS":
      let { coursesData } = payload;
      console.log(payload);
      return {
        ...state,
        loading: false,
        courses: coursesData
      };

    case "GET_COURSES_FAILURE":
      return {
        ...state,
        loading: false
      };

    case "GET_AUTHORS_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "GET_AUTHORS_SUCCESS":
      let { authorsData } = payload;
      console.log(payload);
      return {
        ...state,
        loading: false,
        authors: authorsData
      };

    case "GET_AUTHORS_FAILURE":
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};

export default courseReducer;
