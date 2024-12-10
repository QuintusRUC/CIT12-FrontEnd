import React from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "./NewSearchPage";
import FeatureMovie from "./FeaturedMovie";

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
      {!initialSearch && <FeatureMovie />}
    </>
  );
};

export default HomePage;
