import axios from "axios";
import { toast } from "react-toastify";

export const registerAction = (authData) => async (dispatch) => {

    
  try {
    const { data } = await axios.post(
      "http://localhost:5001/register",
      authData
    );
    dispatch({ type: "REGISTER", payload: data });
    window.location = "/";
  } catch (error) {
    console.error("Error Details:", error);
    const errorMessage = error.response?.data?.msg || "An error occurred.";
    toast(errorMessage, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

export const loginAction = (authData) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:5001/login", authData);
    
    dispatch({ type: "LOGIN", payload: data });
    window.location = "/";
} catch (error) {
      const errorMessage = error.response?.data?.msg || "An error occurred.";
      console.log(error)
    toast(errorMessage, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
