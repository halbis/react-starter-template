import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import React from "react";
import LoginPage from "../components/auth/LoginPage";
import RegisterPage from "../components/auth/RegisterPage";
import HomePage from "../components/HomePage";

const routes = ({ token }) => {
  //private route wrapper
  function PrivateRoute() {
    return !token ? <Navigate to="/login" /> : <Outlet />;
  }
  //public route wrapper
  function PublicRoute() {
    return token ? <Navigate to="/" /> : <Outlet />;
  }
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/user/:id" element={<ProfilePage />} />
        <Route path="/setting" element={<Dashboard />} /> */}
        </Route>
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </Router>
  );
};

export default routes;
