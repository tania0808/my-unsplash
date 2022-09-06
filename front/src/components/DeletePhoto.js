import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../store/store";

const DeletePhoto = ({id, toggleDelete }) => {
  const localStorageData = localStorage.getItem("token");

  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [data, setData] = useState({
    id: id,
    password: "",
  });

const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const deletePhoto = async (e) => {
    e.preventDefault();

    await axios
      .delete("http://localhost:3000", {
        headers: {
          accessToken: localStorageData,
        },
        data
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch(deleteItem(id))
        }
      });
    toggleDelete()
  };

  return (
    <div className="fixed top-0 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 ">
      <div className="bg-white w-2/3 max-w-sm h-fit rounded-md p-3 z-50 ">
        <div className="flex justify-between">
          <h1>Are you sure ?</h1>
          <button onClick={toggleDelete}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <form className="flex flex-col mt-6 mb-8 w-full gap-4 px-6">
          <div>
            <label htmlFor="password" className="text-xs">
              Password
            </label>
            <br />
            <input
              className="text-xs w-full p-1 mt-1 border-1 border-input rounded-md outline-none text-slate-600"
              type="password"
              value={data.password}
              onChange={handleChange}
              name="password"
            />
          </div>
        </form>

        <div className="flex justify-end">
          <button onClick={toggleDelete} className="text-xs pr-6 text-grey">
            Cancel
          </button>
          <button
            onClick={(e) => deletePhoto(e)}
            type="submit"
            className="bg-red-500 text-white font-bold text-xs h-[35px] p-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePhoto;
