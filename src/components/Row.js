import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";
export const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3${fetchUrl}`
      );
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={
              isLargeRow
                ? base_url + movie.poster_path
                : base_url + movie.backdrop_path
            }
            key={movie.id}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;
