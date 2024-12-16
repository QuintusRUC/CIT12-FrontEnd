import axios from "axios";

const TMDB_API_KEY = "your_tmdb_api_key_here";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const BACKEND_BASE_URL = "https://localhost:7182"; // Backend API Base URL

/**
 * Fetch data from API.
 * @param {string} url - API endpoint or query (for TMDB).
 * @param {boolean} isTMDB - Whether the request is for TMDB or the backend.
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE). Defaults to "GET".
 * @param {object|null} data - Data payload for POST/PUT requests.
 * @returns {Promise<any>} - API response data.
 */
const fetchData = async (url, isTMDB = false, method = "GET", data = null) => {
  try {
    const config = {
      method,
      url: isTMDB ? `${TMDB_BASE_URL}/search/movie` : `${BACKEND_BASE_URL}/${url}`,
      headers: isTMDB
        ? {
            accept: "application/json",
            Authorization: `Bearer ${TMDB_API_KEY}`,
          }
        : {
            "Content-Type": "application/json",
          },
      ...(data && { data }), // Include data for POST/PUT requests
    };

    if (isTMDB) {
      config.params = { query: url }; // For TMDB, 'url' is treated as the query
    }

    const response = await axios(config);

    // Process TMDB-specific data
    if (isTMDB) {
      const movie = response.data.results[0];
      return movie
        ? {
            poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            rating: movie.vote_average ? parseFloat(movie.vote_average).toFixed(1) : "N/A",
          }
        : { poster_path: null, rating: "N/A" };
    }

    // Return backend response
    return response.data;
  } catch (error) {
    console.error("Fetch data error:", error);
    throw error; // Rethrow for better error handling
  }
};

export default fetchData;
