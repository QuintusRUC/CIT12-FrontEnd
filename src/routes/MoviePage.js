import React from "react";
import { useParams } from "react-router-dom";
import SimilarMovies from "../Components/SimilarMovie";
import Movie from "../Components/Movie";

const MoviePage = () => {
  const { title } = useParams();

  return (
    <div>
      <h1>Movie Page</h1>
      <Movie movie_Title={title} />
      <SimilarMovies movie_Title={title} />
    </div>
  );
};

export default MoviePage;
