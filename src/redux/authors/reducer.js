const initialState = {
  authorList: [],
  getAuthorsStatus: {
    isFullfilled: false,
    isPending: false,
    isCancelled: false
  }
};

const authorReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_AUTHORS_REQUEST": {
      return { ...state };
    }

    case "GET_AUTHORS_PENDING": {
      const { getAuthorsStatus } = payload;
      return {
        ...state,
        getAuthorsStatus
      };
    }

    case "GET_AUTHORS_SUCCESS": {
      const { authorsData, getAuthorsStatus } = payload;
      return {
        ...state,
        authorList: authorsData,
        getAuthorsStatus
      };
    }

    case "GET_AUTHORS_FAILURE": {
      const { getAuthorsStatus } = payload;
      return {
        ...state,
        getAuthorsStatus
      };
    }

    default: {
      return state;
    }
  }
};

export { authorReducer };
