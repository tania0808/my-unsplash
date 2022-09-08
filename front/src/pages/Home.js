import React, { useState } from "react";
import NavBar from "../components/NavBar";
import AddPhoto from "../components/AddPhoto";
import Gallerie from "../components/Gallerie";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`w-11/12 min-md:w-4/5 mx-auto mt-8 bg-opacity-30 `}>
      <NavBar show={show} handleClose={handleClose} handleShow={handleShow} />
      {show && <AddPhoto handleClose={handleClose} />}
      <Gallerie />
    </div>
  );
};

export default Home;
