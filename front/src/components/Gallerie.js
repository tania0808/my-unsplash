import React, { useState, useEffect } from "react";
import axios from "axios";
import { addPhoto, photoAdded } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import ImageItem from "./ImageItem";
import DeletePhoto from "./DeletePhoto";

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

  return (
    <div className="masonry-md sm:masonry-sm xs:masonry xs:flex xs:flex-col xs:items-center mt-10 z-0 relative">
      {photosGal.map((photo, index) => {
          return <div key={index}>
              <ImageItem {...photo} index={index}/>
        {/* {isDelete && <DeletePhoto toggleDelete={toggleDelete} id={photo._id} />} */}
          </div>
        
      })}
    </div>
  );
};

export default Gallerie;
