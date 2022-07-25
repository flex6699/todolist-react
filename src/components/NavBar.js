import React from "react";
import logo from "../assests/Group.svg";
import Login from "../login-signup/login";
import "./NavBar.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import SignUp from "../login-signup/signup";
export default function NavBar() {
  return (
    <div>
      <div className="Nav-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="form">
          <Router>
            <NavLink to="/login" className="login">
              Log in
            </NavLink>
            <NavLink to="/signup" className="signup">
              Sign up
            </NavLink>
            <div className="underline"></div>
            <Routes>
              <Route end path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}
