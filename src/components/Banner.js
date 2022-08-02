import React from "react";
import { categories, getMovies } from "../api";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = React.useState({});
  const fetchRandomMovie = async (_path) => {
    try {
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      ).path;
      const data = await getMovies(netflixOriginalsCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setMovie(movies[randomIndex]);
    } catch (e) {
      console.log(`Banner error: ${e}`);
    }
  };

  React.useEffect(() => {}, []);

  return (
    <div>
      <h1>Banner</h1>
    </div>
  );
};

export { Banner };
