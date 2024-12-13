import React, { useEffect, useState } from "react";
import Movie from "../Components/Movie";
import axios from "axios";

// TMDB API Key and Base URL
const TMDB_API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzIxMDIxMzFjODI4ZWE1YjdhYWFjYjUwODZjMzIyZiIsIm5iZiI6MTczMTkzMTUwNS43NzMsInN1YiI6IjY3M2IyZDcxZGM0YmJjMDFjNjkxZGY2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IoVhYqGNMiZPSccZ6Axm9XSd2XCqolLSWAPozi-fpf8";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const fetchTMDBImages = async (title) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_API_KEY}`,
      },
      params: { query: title },
    });

    const movie = response.data.results[0];
    return movie ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;
  } catch (error) {
    console.error("TMDB fetch error:", error);
    return null;
  }
};

const FeatureMovie = () => {
  const [films, setFilms] = useState([
    { movie_Title: "The Shawshank Redemption", poster_path: null },
    { movie_Title: "The Godfather", poster_path: null },
    { movie_Title: "The Dark Knight", poster_path: null },
    { movie_Title: "The Lord of the Rings: The Return of the King", poster_path: null },
    { movie_Title: "Pulp Fiction", poster_path: null },
    { movie_Title: "Schindler's List", poster_path: null },
  ]);

  useEffect(() => {
    const fetchPosters = async () => {
      const updatedFilms = await Promise.all(
        films.map(async (film) => {
          const posterPath = await fetchTMDBImages(film.movie_Title);
          return { ...film, poster_path: posterPath };
        })
      );
      setFilms(updatedFilms);
    };

    fetchPosters();
  }, []);

  return (
    <div>
      <h2>Featured Movies:</h2>
      {films.map((film, index) => (
        <Movie key={index} movie={film} />
      ))}
    </div>
  );
};

export default FeatureMovie;
