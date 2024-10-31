const authReducer = (state = { auth: null }, action) => {
  switch (action.type) {
    case "REGISTER":
      if (typeof window !== "undefined") {
        localStorage.setItem("auth", JSON.stringify(action.payload));
      }
      return {
        ...state,
        auth: action.payload,
      };
    case "LOGIN":
      if (typeof window !== "undefined") {
        localStorage.setItem("auth", JSON.stringify(action.payload));
      }
      return {
        ...state,
        auth: action.payload,
      };
    case "LOGOUT":
      if (typeof window !== "undefined") {
        localStorage.clear();
      }
      return {
        ...state,
        auth: null,
      };
    default:
      return state;
  }
};
