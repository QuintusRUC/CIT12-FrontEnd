import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import Movie from "../Components/Movie";

const SearchResults = ({ data }) => {
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {data.map((item) => (
        <Movie key={item.movie_Id} movie={item} />
      ))}
    </div>
  );
};

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let params = new URLSearchParams(document.location.search);
  const Search = params.get("Search");
  const [name, setName] = useState("");
  const [result, setResult] = useState(Search);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(-1);
  useEffect(() => {
    if (result) {
      fetch(
        "http://localhost:5221/api/BestMatch/search?keyword1=" +
          result +
          "&page=" +
          page
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data.items);
          setTotalPage(data.numberPages);
        })
        .catch((err) => console.log(err));
    }
  }, [result, page]);
  const handleSearch = () => {
    if (name) {
      setResult(name);
      setPage(0);
      navigate(`${location.pathname}?Search=${name}`);
    } else {
      navigate(`${location.pathname}`);
    }
  };

  return (
    <div>
      <h1>Welcome to the Search Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p>
        Result for : {result}, page {page + 1} / {totalPage}
      </p>
      <SearchResults data={data} />
      <button onClick={() => setPage(page - 1)} disabled={page <= 0}>
        Previous
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === totalPage - 1}
      >
        Next
      </button>
    </div>
  );
};

export default SearchPage;
