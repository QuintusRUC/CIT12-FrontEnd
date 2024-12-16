function Movie({ movie }) {
  if (!movie || !movie.movie_Title) {
    return <div className="movie-error">Invalid movie data</div>;
  }
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
    </div>
  );
}

export default Movie;