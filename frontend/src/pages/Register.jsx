import React, { useState } from "react";
import "./Register.scss";
import upload from "../utils/upload";
import request from "../utils/request";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });
  const navigate = useNavigate();

  const inputHandler = (event) => {
    setUser((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const isSellerHandler = (event) => {
    setUser((prev) => {
      return { ...prev, isSeller: event.target.checked };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const url = await upload(file);
    try {
      await request.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={submitHandler}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={inputHandler}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={inputHandler}
          />
          <label htmlFor="password">Password</label>
          <input name="password" type="password" onChange={inputHandler} />
          <label
            htmlFor="file"
            onChange={(event) => setFile(event.target.files[0])}
          >
            Profile Picture
          </label>
          <input type="file" onChange={inputHandler} />
          <label htmlFor="country">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Usa"
            onChange={inputHandler}
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="checkbox">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={isSellerHandler} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+91 9876543210"
            onChange={inputHandler}
          />
          <label htmlFor="desc">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={inputHandler}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Register;
