import React, { useState, useEffect } from "react";
import axios from "axios";
import { addPhoto, photoAdded } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import ImageItem from "./ImageItem";

const Gallerie = () => {
  const localStorageData = localStorage.getItem("token");

  const dispatch = useDispatch();

  const photosGal = useSelector((state) => state.photos.value);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    await axios
      .get("http://localhost:3000", {
        headers: {
          accessToken: localStorageData,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(addPhoto(response.data));
        }
      });
  };

  console.log(photosGal);

  if(photosGal.length === 0) {
    return <h1 className="mt-10">Your list is empty ! Feel free to add you favourite photos 😉</h1>
  }

  return (
    <div className="masonry-md sm:masonry-sm xs:masonry xs:flex xs:flex-col xs:items-center mt-10 z-0 relative">
      {photosGal.map((photo, index) => {
        return (
          <div key={index}>
            <ImageItem {...photo} index={photo._id} />
<<<<<<< HEAD
=======
            {/* {isDelete && <DeletePhoto toggleDelete={toggleDelete} id={photo._id} />} */}
>>>>>>> d94cbe112dcd2077c56a1826be3256f7c508e027
          </div>
        );
      })}
    </div>
  );
};

export default Gallerie;
