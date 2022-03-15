import axios from "axios";

//new instance of axios
const Axios = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default Axios;

//function to set authentication in header
export const setAuthHeader = (token) => {
  if (token) Axios.defaults.headers.common["x-auth-token"] = token;
  delete Axios.defaults.headers.common["x-auth-token"];
};
