import React, { useState } from "react";
import "./Style.css";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      if (!username || !password) {
        setError("Please enter both username and password.");
        return;
      }

      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });

      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(response.data);
        onLogin();
      }
    } catch (error) {
      console.log(error.response.data);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="main">
      <div className="login">
        <p>Welcome back!👋</p>
        <h2>Sign in to your account</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Your Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="forgot">
          <a href="/">Forgot your password?</a>
        </p>
        {error && <div className="error">{error}</div>}
      </div>
      <div>
        Don't have an Account? <a href="/">Sign up</a>
      </div>
    </div>
  );
};

export default Login;
