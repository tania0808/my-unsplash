import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setLsData } from "../store/store";

/**
 * DropDown window with username and log out button
 * @returns HTML element
 */
const NavBarDropDown = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.photos.lsData.user);

  /**
   * Log out and redirect to login page
   */
  const logOut = () => {
    localStorage.clear();
    dispatch(setLsData(null));
    navigate("/auth/login");
  };

  return (
    <div className="z-50 bg-white w-[100px] h-fit divide-solid flex justify-center absolute right-0 top-10 text-xs font-poppins font-medium p-2 border-1 rounded-md">
      <ul className="divide-solid">
        <li className="block min-xs:hidden ">{user}</li>
        <li className="text-red-500 xs:pt-1" onClick={logOut}>
          Log out
        </li>
      </ul>
    </div>
  );
};

export default NavBarDropDown;
