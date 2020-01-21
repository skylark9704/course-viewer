import axios from "axios";

import {
  GET_AUTHORS_REQUEST,
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_FAILURE
} from "./actionTypes";

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

export { getAuthors, getAuthorsSuccess };
