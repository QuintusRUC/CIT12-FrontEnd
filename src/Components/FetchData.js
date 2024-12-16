import axios from "axios";

const TMDB_API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzIxMDIxMzFjODI4ZWE1YjdhYWFjYjUwODZjMzIyZiIsIm5iZiI6MTczMTkzMTUwNS43NzMsInN1YiI6IjY3M2IyZDcxZGM0YmJjMDFjNjkxZGY2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IoVhYqGNMiZPSccZ6Axm9XSd2XCqolLSWAPozi-fpf8";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const fetchData = async (title) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TMDB_API_KEY}`,
      },
      params: { query: title },
    });

    const movie = response.data.results[0];
    return movie
      ? {
          poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average
            ? parseFloat(movie.vote_average).toFixed(1) // Convert to number and format to 1 decimal
            : "N/A",
        }
      : { poster_path: null, rating: "N/A" };
  } catch (error) {
    console.error("TMDB fetch error:", error);
    return { poster_path: null, rating: "N/A" };
  }
};

export default fetchData;
