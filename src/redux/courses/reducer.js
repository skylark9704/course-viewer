let initialState = {
  coursesList: [],
  loading: false,
  addCourseRequest:{}
};

const courseReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_COURSES_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "GET_COURSES_SUCCESS":
      const { coursesData } = payload;
      return {
        ...state,
        loading: false,
        coursesList: coursesData
      };

    case "GET_COURSES_FAILURE":
      return {
        ...state,
        loading: false
      };

    case "ADD_COURSE_REQUEST":{
      const {addCourseRequest} = payload
      return {
        ...state,
        addCourseRequest
      };}

    case "ADD_COURSE_SUCCESS":{
      const {addCourseRequest} = payload
      return {
        ...state,
        addCourseRequest
      };}

    case "ADD_COUSE_FAILURE":{
      const {addCourseRequest} = payload
      return {
        ...state,
        addCourseRequest
      };}
      
    default:
      return initialState;
  }
};

export { courseReducer };
