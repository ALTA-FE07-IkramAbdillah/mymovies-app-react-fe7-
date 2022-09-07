import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Containers } from "./NavBar";
import "../Styles/Movies.css";
import TrailerMovies from "../Trailers/TrailerMovies";
import { useLocation, useNavigate } from "react-router-dom";

const Movies = () => {
  const { toggle, inputValue } = useContext(Containers);
  const input = inputValue;
  const [moviesData, setMoviesData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [movieTitle, setMovieTitle] = useState("");
  const Shown = input ? "search" : "discover";
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`;
  const Images = "https://image.tmdb.org/t/p/w500";
  const location = useLocation();
  const navigate = useNavigate();

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: `${process.env.REACT_APP_API_KEY}`,
        query: input,
      },
    });
    const results = data.data.results;
    setMoviesData(results);
  };

  useEffect(() => {
    setTimeout(() => {
      MovieCall();
    }, 100);
  }, [input]);

  const MoviesTitle = (movie) => {
    setMovieTitle(movie.title);
    setTrailer(!trailer);
  };

  const DetailPage = (movie) => {
    console.log(movie);
    navigate("/detailPage", {
      state: {
        image: movie.poster_path || movie.backdrop_path,
        title: movie.title,
        original_title: movie.original_title,
        genre: movie.genre_ids,
        release: movie.release_date,
        rating: movie.vote_avarage,
        popularity: movie.popularity,
        description: movie.overview,
      },
    });
  };

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {moviesData.map((movie) => {
            return (
              <Fragment>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle color="#ff206e" fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => MoviesTitle(movie)} />
                  <img src={movie.poster_path ? `${Images}${movie.poster_path}` : "https://via.placeholder.com/500x750.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=No+image"} alt="" onClick={() => DetailPage(movie)} />
                  <h3 id={movie.title.length > 30 ? "smaller-Text" : "smaller-Text"} className={toggle ? "mainColor" : "secondary"}>
                    {movie.title}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          {trailer ? console.log : <TrailerMovies moviesTitle={movieTitle} />}
          <AiOutlineClose id={trailer ? "Nothing" : "Exit1"} className={toggle ? "DarkTheme" : "LightThemeClose"} fontSize={55} color="#fff" cursor={"pointer"} onClick={() => setTrailer(true)} />
        </div>
      </div>
    </Fragment>
  );
};

export default Movies;
