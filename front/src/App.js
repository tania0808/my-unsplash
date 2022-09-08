// import { Link } from "react-router-dom";
import React from "react";
import { Routes, Route } from "react-router-dom";

import IfNotLoggedIn from "./privateRoute/IfNotLoggedIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <IfNotLoggedIn>
              <Home />
            </IfNotLoggedIn>
          }
        />
        <Route path="auth/signup" element={<SignUp />} />
        <Route path="auth/login" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
