import React from "react";

function Movie({ movie }) {
  return (
    <>
      <h1>{movie.Title}</h1>
      <p>{movie.Year}</p>
      
    </>
  );
}

export default Movie;
