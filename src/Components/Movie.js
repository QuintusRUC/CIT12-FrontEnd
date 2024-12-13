function Movie({ movie }) {
  if (!movie || !movie.movie_Title) {
      return <div className="movie-error">Invalid movie data</div>;
  }
  return (
      <div className="movie">
          <p>{movie.movie_Title}</p>
          <img
              src={movie.poster_path || "https://via.placeholder.com/150"}
              alt={movie.movie_Title}
          />
      </div>
  );
}

export default Movie;
