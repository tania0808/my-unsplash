import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

import { setLsData } from "../store/store";
import handleChange from "../utils/handleChange";

/**
 *
 * @returns Sign up component
 */
const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * Sign up to user account
   * @param {*} e
   */
  const signUp = async (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/auth/signup", user).then((response) => {
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.userName);
        dispatch(
          setLsData({
            token: response.data.token,
            user: response.data.userName,
          })
        );
        navigate("/");
      }
    });
  };

  return (
    <div className="flex justify-center align-center bg-light-blue w-full h-screen">
      <div className="flex flex-col items-center bg-white xs:w-[95%] max-w-[650px] w-2/3 h-fit m-auto rounded-xl">
        <h1 className={`mt-16 text-2xl font-semibold`}>
          Create Your Account !{" "}
        </h1>
        <p className={`font-ligh text-xxs text-slate-500 mt-2`}>
          Unsplash App <br />
          App For Sharing Your Photos
        </p>
        <form className="flex flex-col mt-6 mb-8 w-2/3 xs:w-4/5 gap-4">
          <div>
            <label htmlFor="email" className="text-xs">
              Name
            </label>
            <br />
            <input
              className="text-xs w-full p-1 border-1 border-input rounded-md outline-none text-slate-600"
              value={user.name}
              onChange={(e) => handleChange(e, setUser)}
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
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
          <button
            onClick={(e) => signUp(e)}
            type="button"
            className="block bg-gradient-to-r from-sky-500 to-indigo-500 w-full text-white text-xs p-2 rounded-md"
          >
            SIGN UP
          </button>
          <Link to="/auth/login">
            <button className="block mx-auto text-auth-btn text-xs">
              LOGIN
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
