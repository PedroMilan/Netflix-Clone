import React from "react";
import { categories, getMovies } from "../api";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = React.useState({});
  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      ).path;
      const data = await getMovies(netflixOriginalsCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setMovie(movies[randomIndex]);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    fetchRandomMovie();
  }, []);

  return (
    <header
      className="banner-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roudPosition: "center-center",
      }}
    >
      <div></div>
    </header>
  );
};

export { Banner };
