import React, { Fragment, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import "../Styles/TrailerMovies.css";

function TrailerTvShows({ TvShowTitle }) {
  const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = useState("");

  function handleSearch() {
    setVideo(TvShowTitle);
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }
  useEffect(() => {
    handleSearch();
  }, [videoURL]);
  return (
    <Fragment>
      <div className="Container"></div>
      <div className="player">
        <ReactPlayer url={videoURL} controls={true} width={"640px"} height={"500px"} muted={false} />
      </div>
    </Fragment>
  );
}
export default TrailerTvShows;
