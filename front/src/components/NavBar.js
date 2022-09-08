import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import NavBarDropDown from "./NavBarDropDown";

import { filterItems } from "../store/store";
import logo from "../assets/my_unsplash_logo.svg";

/**
 * Navigation bar with logo, search bar and add photo button
 * @param {*} param0
 * @returns Navigation bar component
 */
const NavBar = ({ handleShow }) => {
  const [dropDown, setDropDown] = useState(false);

  const inputRef = useRef("");
  const dispatch = useDispatch();

  const ls = useSelector((state) => state.photos.lsData);

  let acronym = ls.user
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "");

  /**
   * Show photos after filtering by label
   */
  const filterPhotos = () => {
    dispatch(filterItems(inputRef.current.value));
  };

  /**
   * Open dropDown menu
   */
  const expandDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex w-2/3 xs:w-4/5 ">
        <Link to={"/"} className="flex mr-2">
          <img className="xs:w-26" src={logo} alt="unsplash logo" />
        </Link>

        <form className="w-2/3 relative">
          <input
            type="search"
            ref={inputRef}
            onChange={filterPhotos}
            className="w-full max-w-xs py-2 px-10 border-1 text-xs border-input rounded-md outline-none text-slate-600"
            placeholder="Search"
          />
          <span className="material-symbols-outlined absolute left-2 top-1 text-lg text-slate-400">
            search
          </span>
        </form>
      </div>
      <div className="flex gap-3 items-center">
        <button
          onClick={handleShow}
          className="bg-add-btn text-white font-bold text-xs h-[30px] xs:w-[30px] p-1 rounded-md xs:rounded-full flex items-center justify-center"
        >
          <span className="xs:hidden px-1">Add a photo</span>
          <span className="material-symbols-outlined min-xs:hidden">
            add_circle
          </span>
        </button>
        <div className="flex items-center">
          <p className="flex items-center justify-center text-xs text-gray-600 border-2 rounded-full w-[30px] h-[30px] p-2 xs:hidden">
            {acronym}
          </p>
          <span
            onClick={() => expandDropDown()}
            className="material-symbols-outlined relative cursor-pointer"
          >
            expand_more
            {dropDown && <NavBarDropDown />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
