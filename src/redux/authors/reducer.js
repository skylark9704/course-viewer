const initialState = {
  authorList: [],
  getAuthorsRequest: {
    isFullfilled: false,
    isPending: false,
    isCancelled: false
  }
};

const authorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_AUTHORS_REQUEST": {
      const { getAuthorsRequest } = payload;
      return {
        ...state,
        getAuthorsRequest
      };
    }

    case "GET_AUTHORS_SUCCESS": {
      const { authorsData, getAuthorsRequest } = payload;
      return {
        ...state,
        authorList: authorsData,
        getAuthorsRequest
      };
    }

    case "GET_AUTHORS_FAILURE": {
      const { getAuthorsRequest } = payload;
      return {
        ...state,
        getAuthorsRequest
      };
    }

    default: {
      return state;
    }
  }
};

export { authorReducer };
