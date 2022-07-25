import React, { useState } from "react";
import "./login.css";
import eye from "../assests/eye.svg";
import dot from "../assests/dot.svg";
export default function Login() {
  const [isShown, setShown] = useState(false);
  const showPass = () => {
    if (isShown) {
      setShown(false);
    } else {
      setShown(true);
    }
  };
  return (
    <form className="login-form">
      <h2 className="heading">To Continue</h2>
      <h3>We need your Name & Email </h3>
      <input type="email" className="email" placeholder="Email" />
      {isShown && <img src={dot} alt="dot" className="dot" />}
      <img src={eye} alt="hidden" className="eye" onClick={showPass} />
      <input
        type={isShown ? "text" : "password"}
        className="password"
        placeholder="Password"
      />
      <h4>Remember Me</h4>
      <input type="checkbox" className="check" />
      <button className="btn">Log In</button>
    </form>
  );
}
