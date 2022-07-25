import React, { useState } from "react";
import "./signup.css";
import eye from "../assests/eye.svg";
import dot from "../assests/dot.svg";
export default function SignUp() {
  const [isShown, setShown] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const showPass = () => {
    if (isShown) {
      setShown(false);
    } else {
      setShown(true);
    }
  };
  const enterName = (e) => {
    setFullName(e.target.value);
  };
  const enterPassword = (e) => {
    setPassword(e.target.value);
  };
  const enterMail = (e) => {
    setEmail(e.target.value);
  };
  const SubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form className="sign-form" onSubmit={SubmitForm}>
      <input
        type="text"
        className="text"
        placeholder="Full Name"
        name="Fname"
        onChange={enterName}
        value={fullName}
        required
      />
      <input
        type="email"
        className="email"
        placeholder="Email"
        onChange={enterMail}
        name="email"
        value={email}
        required
      />
      {isShown && <img src={dot} alt="dot" className="dot" />}
      <img src={eye} alt="hidden" className="eye" onClick={showPass} />
      <input
        type={isShown ? "text" : "password"}
        className="password"
        placeholder="Password"
        name="password"
        onChange={enterPassword}
        value={password}
        required
      />
      <h4>Remember Me</h4>
      <input type="checkbox" className="check" />
      <input type="submit" className="btn" value="Sign up" />
    </form>
  );
}
