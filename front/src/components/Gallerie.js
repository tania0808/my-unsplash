import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { fetchPhotos } from "../store/store";
import ImageItem from "./ImageItem";

const Gallerie = () => {
  const dispatch = useDispatch();

  const photosGal = useSelector((state) => state.photos.filteredPhotos);
  const ls = useSelector((state) => state.photos.lsData);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    await axios
      .get("http://localhost:3000", {
        headers: {
          accessToken: ls.token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch(fetchPhotos(response.data));
        }
      });
  };

  if (photosGal.length === 0) {
    return (
      <h1 className="mt-10">
        Your list is empty ! Feel free to add you favourite photos 😉
      </h1>
    );
  }

  return (
    <div className="masonry-md sm:masonry-sm xs:masonry xs:flex xs:flex-col xs:items-center mt-10 z-0 relative">
      {photosGal.map((photo, index) => {
        return (
          <div key={index}>
            <ImageItem {...photo} index={photo._id} />
          </div>
        );
      })}
    </div>
  );
};

export default Gallerie;
