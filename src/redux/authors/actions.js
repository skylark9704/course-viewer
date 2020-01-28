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
      authorsData: data,
      getAuthorsRequest: {
        isPending: false,
        isFullfilled: true,
        isCancelled: false
      }
    }
  };
};

const getAuthorsFailure = () => {
  return {
    type: GET_AUTHORS_FAILURE,
    payload: {
      getAuthorsRequest: {
        isPending: false,
        isFullfilled: true,
        isCancelled: true
      }
    }
  };
};

const getAuthorsRequest = () => {
  return {
    type: GET_AUTHORS_REQUEST,
    payload: {
      getAuthorsRequest: {
        isPending: true,
        isFullfilled: false,
        isCancelled: false
      }
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

export { getAuthors, getAuthorsSuccess, getAuthorsRequest };
