const authReducer = (state = { auth: null }, action) => {
  switch (action.type) {
    case "REGISTER":
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...state,
        auth: action.payload,
      };
    case "LOGIN":
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...state,
        auth: action.payload,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        auth: null,
      };
    default:
      return state;
  }
};
