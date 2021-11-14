const displayReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: action.payload,
        token: action.token,
        data: action.data,
      };
    case "LOGOUT":
      return {
        ...state,
        logout: action.payload,
        token: action.token,
        data: action.data,
      };
    case "OPEN_CASESTUDY":
      return { ...state, openCaseStudy: action.payload };
    default:
      return state;
  }
};

export default displayReducer;
