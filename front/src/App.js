// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AddPhoto from "./components/AddPhoto";

function App() {
  const token = localStorage.getItem("token");
  let navigate = useNavigate();

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    if (!token) {
      navigate("auth/login");
    }
  }, [token, navigate]);

  return (
    <div className={`w-11/12 mx-auto mt-6 bg-opacity-30`}>
      <NavBar show={show} handleClose={handleClose} handleShow={handleShow} />
      <h1>Hello, you are on the home page</h1>
      {show && <AddPhoto handleClose={handleClose}/>}
    </div>
  );
}

export default App;
