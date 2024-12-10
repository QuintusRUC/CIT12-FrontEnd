import React from "react";
import Movie from "../Components/Movie";

const FeatureMovie = () => {
  // const movies = ["tt0136393", "tt2126355", "tt2815902", "tt0082783", "tt0109120", "tt0283139", "tt5752192", "tt0111161", "tt0110912", "tt0108052", "tt0111161", "tt0110912", "tt0108052", "tt0111161", "tt0110912", "tt0108052", "tt0111161", "tt0110912", "tt0108052", "tt0111161", "tt0110912", "tt0108052", "tt0111161", "tt0110912", "tt0108052", "tt0111161", "tt0110912", "tt0108052", "tt0111161", "tt0110912", "tt0108052", "tt0111161", "tt0110912", "tt0108052", "tt0111161", "tt0110912", "tt0108052", "tt0111161", "tt0110912", "tt0108052"];
  const films = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "The Lord of the Rings: The Return of the King",
    "Pulp Fiction",
    "Schindler's List",
  ];
  return (
    <div>
      <h2>Featured Movies:</h2>
      {films.map((film, index) => (
        <Movie key={index} movie_Title={film} />
      ))}
    </div>
  );
};

export default FeatureMovie;
