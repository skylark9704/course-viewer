let initialState = {
    authorList: [],
    loading: false
  };

const authorReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_AUTHORS_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "GET_AUTHORS_SUCCESS":
      let { authorsData } = payload;
      return {
        ...state,
        loading: false,
        authorList: authorsData
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

export {authorReducer}
