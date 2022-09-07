// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AddPhoto from "./components/AddPhoto";
import Gallerie from "./components/Gallerie";

function App() {
  const token = localStorage.getItem("token");
  let navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    if (!token) {
      navigate("auth/login");
    }
  }, [token, navigate]);

  return (
    <div className={`w-11/12 min-md:w-4/5 mx-auto mt-8 bg-opacity-30 `}>
      <NavBar show={show} handleClose={handleClose} handleShow={handleShow} />
      {show && <AddPhoto handleClose={handleClose}/>}
      <Gallerie/>
    </div>
  );
}

export default App;
