import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

import { store } from "./store/store";
import "./index.css";

import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="auth/signup" element={<SignUp />} />
        <Route path="auth/login" element={<LogIn />} />
      </Routes>
    </Router>
  </Provider>
);
