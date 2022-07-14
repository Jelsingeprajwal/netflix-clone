import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../request";
import { base_url } from "./Row";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
      );
      // console.log(request.data.results);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${base_url + movie?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <p className="banner_description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner-fadeBottom"> </div>
    </header>
  );
}

export default Banner;
