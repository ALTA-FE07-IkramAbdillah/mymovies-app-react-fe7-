import React from "react";
import { useLocation } from "react-router-dom";
import "../Styles/Detail.css";

const DetailPage = () => {
  const location = useLocation();

  return (
    <div className="movie-card">
      <div className="info-section">
        <div className="movie-header">
          <img className="poster" src={location.state.image ? "https://image.tmdb.org/t/p/original/" + location.state.image : "https://via.placeholder.com/500x750.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=No+image"} alt="" />
          <h1>{location.state.title}</h1>
          <h4>Release Date : {location.state.release}</h4>
          <div className="movie-desc">
            <p>Description :</p>
            <p className="text">{location.state.description}</p>
          </div>
        </div>
      </div>
      <div className="blur_back brigh_back"></div>
    </div>
  );
};

export default DetailPage;
