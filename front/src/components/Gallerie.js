import React, { useState, useEffect } from "react";
import axios from "axios";
import { addPhoto, photoAdded } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

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
    <div className="masonry sm:masonry-sm md:masonry-md mt-10">
      {photosGal.map((photo, index) => {
        return (
          <img
            key={index}
            className="object-cover rounded-md mb-2"
            src={photo.photoUrl}
            alt={photo.label}
            width={300}
            height={200}
          />
        );
      })}
    </div>
  );
};

export default Gallerie;
