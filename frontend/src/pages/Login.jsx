import React, { useState } from "react";
import "./Login.scss";
import request from "../utils/request";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await request.post("auth/login", {
        username,
        password,
      });
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <h1>Sign in</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="john doe"
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="username"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
        {error && error}
      </form>
    </div>
  );
};

export default Login;
