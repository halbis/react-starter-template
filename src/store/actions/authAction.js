import { SET_CURRENT_USER, GET_ERRORS } from "./types";
import Axios from "../../utils/client";
import JwtDecode from "jwt-decode";

export const LoginHandler = (data) => async (dispatch) => {
  const endpoint = "/police/login";
  const response = await Axios.post(endpoint, data);

  if (response.status === 200) {
    const token = response.data;
    //storing token in localStorage
    await localStorage.setItem("jwtToken", token);
    const decoded = await JwtDecode(token);
    //set current user
    await dispatch(setCurrentUser(decoded));
    toast.success("Login Successful");
    return window.location.replace("/");
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: response.data,
    });
  }
};

export const RegisterHandler = (data, navigate) => async (dispatch) => {
  const endpoint = "/police/signup";
  const response = await Axios.post(endpoint, data);
  if (response.status === 200) {
    navigate("/login", { replace: true });
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: response.data,
    });
  }
};

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

//Logout User
export const Logout = () => async (dispatch) => {
  //remove token from localStorage
  await localStorage.removeItem("jwtToken");
  //set current user to {}
  dispatch(setCurrentUser({}));
  return window.location.replace("/login");
};
