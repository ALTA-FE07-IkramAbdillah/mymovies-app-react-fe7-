import React, { Fragment, useEffect, useState, useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Container } from "./NavBar";
import "../Styles/Movies.css";
import axios from "axios";
import TrailerTvShows from "../Trailers/TrailerTvShows";
import { useLocation, useNavigate } from "react-router-dom";

function TvShows() {
  const { toggle, inputValue } = useContext(Container);
  const input = inputValue;
  const [showData, setShowData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const Shown = input ? "search" : "discover";
  const [title, setTitle] = useState("");
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`;
  const Images = "https://image.tmdb.org/t/p/w500";
  const location = useLocation();
  const navigate = useNavigate();

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: `${process.env.REACT_APP_API_KEY}`,
        query: input,
      },
    });
    const results = data.data.results;
    setShowData(results);
  };
  useEffect(() => {
    setTimeout(() => {
      TvShows();
    }, 100);
  }, [input]);
  console.log(showData);
  const TvShowTitle = (shows) => {
    setTitle(shows.name);
    setTrailer(!trailer);
  };

  const DetailPage = (shows) => {
    console.log(shows);
    navigate("/detailPage", {
      state: {
        image: shows.poster_path || shows.backdrop_path,
        title: shows.title || shows.original_name,
        original_title: shows.original_title,
        genre: shows.genre_ids,
        release: shows.release_date,
        rating: shows.vote_avarage,
        popularity: shows.popularity,
        description: shows.overview,
      },
    });
  };

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {showData.map((shows) => {
            return (
              <Fragment key={shows.id}>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle color="#ff206e" fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => TvShowTitle(shows)} />
                  <img src={shows.poster_path ? `${Images}${shows.poster_path}` : "https://via.placeholder.com/500x750.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=No+image"} alt="" onClick={() => DetailPage(shows)} />
                  <h3 id={shows.name.length > 0 ? "smaller-Text" : ""} className={toggle ? "mainColor" : "secondaryColor"}>
                    {shows.name}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          {trailer ? console.log : <TrailerTvShows TvShowTitle={title} />}
          <AiOutlineClose id={trailer ? "Nothing" : "Exit1"} className={toggle ? "DarkTheme" : "LightThemeClose"} fontSize={55} color="#fff" cursor={"pointer"} onClick={() => setTrailer(true)} />
        </div>
      </div>
    </Fragment>
  );
}

export default TvShows;
