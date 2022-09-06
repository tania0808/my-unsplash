import React, { useState} from "react";
import axios from "axios";
import { addPhoto, photoAdded } from '../store/store';
import { useDispatch, useSelector } from 'react-redux'
const AddPhoto = ({ handleClose }) => {
    const localStorageData = localStorage.getItem('token')
    const photosGal = useSelector((state) => state.photos.value);

    const [photo, setPhoto] = useState({
        label: "",
        photoUrl: "",
    });
    const dispatch = useDispatch();
    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setPhoto((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const addPhoto = async (e) => {
        e.preventDefault();
    
        axios.post("http://localhost:3000", photo, {
            headers: {
              accessToken: localStorageData
            }}).then((response) => {
            if (response.status === 200) {
                handleClose();
                dispatch(photoAdded(response.data.newPhoto) )
          }
        });
      };
  return (
    <div className="fixed top-0 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 ">
      <div className="bg-white w-2/3 max-w-sm h-fit rounded-md p-3 ">
        <div className="flex justify-between">
          <h1>Add a new photo</h1>
          <button onClick={handleClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <form className="flex flex-col mt-6 mb-8 w-full gap-4 px-6">
          <div>
            <label htmlFor="label" className="text-xs">
              Label
            </label>
            <br />
            <input
              className="text-xs w-full p-1 mt-1 border-1 border-input rounded-md outline-none text-slate-600"
              type="text"
              value={photo.label}
              onChange={handleChange}
              name="label"
            />
          </div>
          <div>
            <label htmlFor="text" className="text-xs">
              Photo URL
            </label>
            <br />
            <input
              className="text-xs w-full p-1 mt-1 border-1 border-input rounded-md outline-none text-slate-600"
              type="text"
              value={photo.photoUrl}
              onChange={handleChange}
              name="photoUrl"
            />
          </div>
        </form>

        <div className="flex justify-end">
          <button  onClick={handleClose} className="text-xs pr-6 text-grey">Cancel</button>
          <button onClick={addPhoto} type="submit" className="bg-add-btn text-white font-bold text-xs h-[35px] p-2 rounded-md">
            Add a photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
