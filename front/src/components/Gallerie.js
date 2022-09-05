import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallerie = () => {
  const localStorageData = localStorage.getItem("token");
  const [photos, setPhotos] = useState([]);



  useEffect(() => {
    getPhotos()
  }, []);

  const getPhotos = async () => {

    axios
      .get("http://localhost:3000", {
        headers: {
          accessToken: localStorageData,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setPhotos(response.data);
        }
      });
  };

  return <div className="masonry sm:masonry-sm md:masonry-md">
    {
        photos.map((photo, index) => {
            return <img key={index} className="object-cover rounded-md mb-2" src={photo.photoUrl} alt={photo.label} width={300} height={200} />
        })
    }
  </div>;
};

export default Gallerie;
