import React from "react";
import { useNavigate } from "react-router-dom";

import path1 from "../assets/path-1.png";
import path2 from "../assets/path-2.png";
import path3 from "../assets/path-3.png";

const NotFound = () => {

    const navigate = useNavigate()
  return (
    <div className="flex flex-col w-full h-screen justify-around bg-gradient-to-b from-white to-linear-bottom">
      <div className="relative w-full h-4/6 flex justify-center items-center">
        <img className="absolute" src={path1} alt="" />
        <img className="absolute" src={path2} alt="" />
        <img className="absolute" src={path3} alt="" />
        <div className="w-[72%] h-[35%] min-xs:w-[82%] min-xs:h-[54%] min-sm:h[70%] max-w-[600px] bg-white absolute rounded-lg flex flex-col items-center justify-center">
          <p className="xs:text-8xl text-[10rem] text-blue-grey font-black">404</p>
          <p className="text-deep-violet capitalize font-black">
            page not found
          </p>
        </div>
      </div>
      <div className="w-3/6 flex flex-col items-center m-auto text-center">
        <p className="text-grey-error">
          The page you are looking for was moved, removed, renamed or might
          never existed.
        </p>
        <button onClick={() => navigate('/')} className="uppercase mt-8 bg-white text-sm text-deep-violet font-bold p-2">
            return home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
