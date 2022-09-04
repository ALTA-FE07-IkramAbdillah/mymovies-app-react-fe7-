import React, { Fragment, useContext, useEffect, useState } from "react";
import { Container } from "./NavBar";
import { AiOutlineClose, AiFillPlayCircle } from "react-icons/ai";
import axios from "axios";
import "../Styles/Movies.css";
import TrailerTrends from "../Trailers/TrailerTrends";

function Trends() {
  const { toggle } = useContext(Container);
  const Api = "https://api.themoviedb.org/3";
  const TrendsShown = "/trending/all/week";
  const [trendArray, setTrendArray] = useState([]);
  const [trendTitle, setTrendTitle] = useState("");
  const Images = "https://image.tmdb.org/t/p/w500";
  const [trailer, setTrailer] = useState(true);

  const Trends = async () => {
    const data = await axios.get(`${Api}${TrendsShown}`, {
      params: {
        api_key: `${process.env.REACT_APP_API_KEY}`,
      },
    });
    const results = data.data.results;
    setTrendArray(results);
  };

  useEffect(() => {
    setTimeout(() => {
      Trends();
    }, 100);
  }, []);
  const TrendTitle = (trend) => {
    setTrendTitle(trend.title);
    setTrailer(!trailer);
  };
  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {trendArray.map((trend) => {
            return (
              <Fragment>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle color="#ff206e" fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => TrendTitle(trend)} />
                  <img src={trend.poster_path ? `${Images}${trend.poster_path}` : "https://via.placeholder.com/500x750.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=No+image"} alt="" onClick={() => TrendTitle(trend)} />
                  <h3 id="smaller-Text" className={toggle ? "mainColor" : "secondary"}>
                    {trend.title || trend.name}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          {trailer ? console.log : <TrailerTrends TrendTitle={trendTitle} />}
          <AiOutlineClose id={trailer ? "Nothing" : "Exit1"} className={toggle ? "DarkTheme" : "LightThemeClose"} fontSize={55} color="#fff" cursor={"pointer"} onClick={() => setTrailer(true)} />
        </div>
      </div>
    </Fragment>
  );
}

export default Trends;
