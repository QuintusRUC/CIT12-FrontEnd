import React from "react";
import { useUser } from "../Contexts/UserContext";
import fetchData from "../Components/FetchData";

function Movie({ movie }) {
  const { user } = useUser(); // Access user from context

  if (!movie || !movie.movie_Title) {
    return <div className="movie-error">Invalid movie data</div>;
  }

  const handleAddBookmark = async () => {
    if (!user || !user.id) {
      alert("You must be logged in to bookmark a movie.");
      return;
    }

    try {
      const payload = {
        userId: user.id,
        itemType: "movie",
        itemId: movie.movie_Id, // Ensure this matches the movie's unique ID field
        annotation: `Bookmark for ${movie.movie_Title}`,
      };

      const response = await fetchData("api/Bookmark/Add", false, "POST", payload);

      alert(response); // Should display "Bookmark added successfully."
    } catch (error) {
      console.error("Failed to add bookmark:", error);
      alert("Failed to add bookmark. Please try again.");
    }
  };

  return (
    <div className="movie">
      <h3>
        {movie.movie_Title}{" "}
        <span style={{ fontWeight: "normal" }}>
          ({movie.rating || "N/A"})
        </span>
      </h3>
      <img
        src={movie.poster_path || "https://via.placeholder.com/150"}
        alt={movie.movie_Title}
        style={{ width: "150px", height: "225px" }}
      />
      <div>
        <button onClick={handleAddBookmark} className="add-bookmark-btn">
          Add Bookmark
        </button>
      </div>
    </div>
  );
}

export default Movie;
