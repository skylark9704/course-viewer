import { ADD_COURSE } from "./actionTypes";

const addCourse = content => {
  return {
    type: ADD_COURSE,
    payload: {
      course: content
    }
  };
};

export {addCourse}
