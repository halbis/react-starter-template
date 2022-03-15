import React from "react";
import MyRoutes from "./utils/routes";
import { useDispatch } from "react-redux";
import autoLogin from "./utils/autoLogin";

const App = () => {
  const dispatch = useDispatch();
  //retrive token
  const token = localStorage.getItem("jwtToken");
  //validate token
  autoLogin(dispatch, token);
  return (
    <div>
      <MyRoutes token={token} />
    </div>
  );
};

export default App;
