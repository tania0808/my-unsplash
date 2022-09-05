import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/my_unsplash_logo.svg";
import Modal from "./Modal";

const NavBar = ({ show, handleShow, handleClose }) => {
  const currentUser = localStorage.getItem("name");

  const [modal, setModal] = useState(false);

  const expandModal = () => {
    setModal(!modal);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex w-2/3">
        <Link to={"/"} className="flex mr-2">
          <img src={logo} alt="unsplash logo" />
        </Link>

        <form className="w-2/3 relative">
          <input
            type="search"
            className="w-full max-w-xs py-2 px-10 border-1 text-xs border-input rounded-md outline-none text-slate-600"
            placeholder="Search by name"
          />
          <span className="material-symbols-outlined absolute left-2 top-1 text-lg text-slate-400">
            search
          </span>
        </form>
      </div>
      <button
        onClick={handleShow}
        className="bg-add-btn text-white font-bold text-xs h-[35px] p-2 rounded-md"
      >
        Add a photo
      </button>
      <div className="flex">
        <p className="text-base">{currentUser}</p>
        <span
          onClick={() => expandModal()}
          className="material-symbols-outlined relative cursor-pointer"
        >
          expand_more
          {modal && <Modal />}
        </span>
      </div>
    </div>
  );
};

export default NavBar;
