import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./LogIn.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [loginData, setLoginData] = useState({});
  const logInHandler = (e) => {
    e.preventDefault();
    const data = {
      email: e.target[0].value,
      password: e.target[2].value,
    };
    setLoginData(data);
  };
  console.log(loginData);
  return (
    <div className="container">
      <div className="form-container">
        <div className="signup-form">
          <h2>Login</h2>
          <form onSubmit={logInHandler}>
            <TextField
              required
              id="outlined-required"
              label="Enter E-mail"
              placeholder="Enter E-mail"
              className="user-input"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter Password"
            />

            <Link to="/forget-password">Forget Password</Link>

            <Link to="/signup">doesn't have account ? Sigh Up</Link>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
