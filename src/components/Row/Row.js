import { useState, useEffect } from "react";
// import YouTube from "react-youtube";
import axios from "../../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        "https://api.themoviedb.org/3/" + fetchUrl
      );
      setMovies(request.data.results);
      console.log(request.data.results);
      return request.data.results;
    };
    fetchData();
  }, [fetchUrl]);

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path && (
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie?.name || movie?.title || movie?.original_title}
              />
            )
        )}
      </div>
      {/* <YouTube videoId="i1eJMig5Ik4" opts={opts} /> */}
    </div>
  );
};

export default Row;
