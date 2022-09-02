import React, { Component } from "react";
import Card from "./components/Card";
import MovieCard from "./components/MovieCard";
import NavBar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    count: 0,
    text: ["Hello World", "Hello Guys"],
  };

  onCount() {
    this.setState({
      count: this.state.count + 1,
      text: "Hey guys",
    });
  }

  render() {
    const listNews = [
      {
        image: "https://media.suara.com/pictures/970x544/2022/08/10/81875-ilustrasi-one-piece-red-kapan-one-piece-red-tayang-di-indonesia-onepiece-filmjp.jpg",
        title: "One Piece",
      },
      {
        image: "https://www.viu.com/ott/id/articles/wp-content/uploads/2021/04/My-Hero-Academia-S5_Slide-Banner.jpg",
        title: "Boku No Hero Academia",
      },
      {
        image: "https://c4.wallpaperflare.com/wallpaper/243/800/972/16-barakamon-wallpaper-preview.jpg",
        title: "Barakamon",
      },
    ];

    return (
      <div>
        <NavBar />
        {listNews.map((item) => {
          return <MovieCard src={item.image} title={item.title} />;
        })}
      </div>
    );
  }
}
