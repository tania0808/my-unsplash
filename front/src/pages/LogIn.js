import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setLsData } from "../store/store";
import handleChange from "../utils/handleChange";

/**
 * Login form
 * @returns Login component
 */
const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  /**
   * Login to user account
   * @param {*} e
   */
  const login = async (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/auth/login", user).then((response) => {
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);

        dispatch(
          setLsData({
            token: response.data.token,
            user: response.data.name,
          })
        );
        navigate("/");
      }
    });
  };

  return (
    <div className="flex justify-center align-center bg-light-blue w-full h-screen">
      <div className="flex flex-col items-center bg-white xs:w-[95%] w-2/3 max-w-[650px] h-fit m-auto rounded-xl">
        <h1 className={`mt-16 text-2xl font-semibold`}>Welcome Back ! </h1>
        <p className={`font-ligh text-xxs text-slate-500 mt-2`}>
          Unsplash App <br />
          App For Sharing Your Photos
        </p>
        <form
          onSubmit={login}
          className="flex flex-col mt-6 mb-8 w-2/3 xs:w-4/5 gap-4"
        >
          <div>
            <label htmlFor="email" className="text-xs">
              EMAIL
            </label>
            <br />
            <input
              className="text-xs w-full p-1 border-1 border-input rounded-md outline-none text-slate-600"
              type="email"
              value={user.email}
              onChange={(e) => handleChange(e, setUser)}
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xs">
              PASSWORD
            </label>
            <br />
            <input
              className="text-xs w-full p-1 border-1 border-input rounded-md outline-none text-slate-600"
              type="password"
              value={user.password}
              onChange={(e) => handleChange(e, setUser)}
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="block bg-gradient-to-r from-sky-500 to-indigo-500 w-full text-white text-xs p-2 rounded-md">
            LOGIN
          </button>
          <Link to="/auth/signup">
            <button className="block mx-auto text-auth-btn text-xs">
              SIGN UP
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
