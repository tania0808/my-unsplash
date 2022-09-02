import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="auth/signup" element={<SignUp />} />
      <Route path="auth/login" element={<LogIn />} />
    </Routes>
  </BrowserRouter>
);
