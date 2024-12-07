import React from "react";
import catalogueImage from "../images/catalogue.jpg";
import { useLocation } from "react-router-dom";
import SearchBar from "./NewSearchPage";

const FeaturedMovies = () => {
  return (
    <div>
      <h2>Featured Movies:</h2>
      <img src={catalogueImage} alt="Catalogue" width="500" />
    </div>
  );
};

const HomePage = () => {
  const location = useLocation();

  // Use URL search params more cleanly
  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get("Search") || "";
  return (
    <>
      <h1>Welcome to the new IMDB</h1>
      {initialSearch && <h2>Search results for: {initialSearch}</h2>}
      <SearchBar />
      {!initialSearch && <FeaturedMovies />}
    </>
  );
};

export default HomePage;
