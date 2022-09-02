import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="flex justify-center align-center bg-light-blue w-full h-screen">
      <div className="flex flex-col items-center bg-white w-2/3 h-fit m-auto rounded-xl">
        <h1 className={`mt-16 text-2xl font-semibold`}>Welcome Back ! </h1>
        <p className={`font-ligh text-xxs text-slate-500 mt-2`}>
          Unsplash App <br />
          App For Sharing Your Photos
        </p>
        <form className="flex flex-col mt-6 mb-8 w-2/3 gap-4">
          <div>
            <label htmlFor="email" className="text-xs">EMAIL</label>
            <br />
            <input  className="text-xs w-full p-1 border-1 border-input rounded-md outline-none text-slate-600" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password" className="text-xs">PASSWORD</label>
            <br />
            <input className="text-xs w-full p-1 border-1 border-input rounded-md outline-none text-slate-600" type="password" placeholder="Enter your password" />
          </div>
          <button className="block bg-gradient-to-r from-sky-500 to-indigo-500 w-full text-white text-xs p-2 rounded-md">LOGIN</button>
          <Link to="/auth/signup">
          <button className="block mx-auto text-auth-btn text-xs">SIGN UP</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
