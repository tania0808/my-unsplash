import React, { useState } from "react";
import DeletePhoto from "./DeletePhoto";

const ImageItem = ({ _id, photoUrl, label}) => {

    const [isDelete, setIsDelete] = useState(false);

    const toggleDelete = () => {
        setIsDelete(!isDelete);
    }
  
    
  return (
    <div>
      <div className={`xs:px-6 relative group z-0`}>
        <button
          onClick={toggleDelete}
          className="z-10 font-medium opacity-0 group-hover:opacity-100 transition ease-in-out duration-500 text-red-500 text-sm border-solid border-1 border-red-500 rounded-xl px-3 py-[1.5px] absolute right-4 top-2 "
        >
          delete
        </button>
        <img
          className="object-cover rounded-md mb-2 group-hover:opacity-80 z-0"
          src={photoUrl}
          alt={label}
        />
        <p className="z-10 font-semibold opacity-0 group-hover:opacity-100 transition ease-in-out duration-500 text-sm text-white absolute left-4 bottom-2 ">
          {label}
        </p>
      </div>
      {isDelete && <DeletePhoto toggleDelete={toggleDelete} id={_id} />}
    </div>
  );
};

export default ImageItem;
