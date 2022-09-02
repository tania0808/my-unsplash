// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import logo from "./assets/my_unsplash_logo.svg";
function App() {
  const token = localStorage.getItem("token");
  let navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("auth/login");
    }
  }, []);

  return (
    <>
      <img src={logo} alt="unsplash logo" />
      <h1>Hello, you are on the home page</h1>
    </>
  );
}

export default App;
