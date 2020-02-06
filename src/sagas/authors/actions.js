import { GET_AUTHORS } from "./actionTypes";

const getAuthorsSuccess = data => {
  return {
    type: GET_AUTHORS.SUCCESS,
    payload: {
      authorsData: data,
      getAuthorsStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: false
      }
    }
  };
};

const getAuthorsRequest = () => {
  return {
    type: GET_AUTHORS.REQUEST
  };
};
const getAuthorsFailure = () => {
  return {
    type: GET_AUTHORS.FAILURE,
    payload: {
      getAuthorsStatus: {
        isPending: false,
        isFullfilled: true,
        isCancelled: true
      }
    }
  };
};

const getAuthorsPending = () => {
  return {
    type: GET_AUTHORS.PENDING,
    payload: {
      getAuthorsStatus: {
        isPending: true,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};

const getAuthorsReset = () => {
  return {
    type: GET_AUTHORS.RESET,
    payload: {
      getAuthorsStatus: {
        isPending: false,
        isFullfilled: false,
        isCancelled: false
      }
    }
  };
};

const GET = {
  SUCCESS: getAuthorsSuccess,
  FAILURE: getAuthorsFailure,
  REQUEST: getAuthorsRequest,
  PENDING: getAuthorsPending,
  RESET: getAuthorsReset
};

export { GET };
