import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

const SearchResults = ({ data }) => {
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {data.map((item) => (
        <div key={item.movie_Id}>
          <h1>{item.movie_Title}</h1>
        </div>
      ))}
    </div>
  );
}

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let params = new URLSearchParams(document.location.search);
  const Search = params.get("Search");
  const [name, setName] = useState("");
  const [result, setResult] = useState(Search);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (Search) {
      console.log(Search);
      fetch("http://localhost:5221/api/BestMatch/search?keyword1=" + Search)
        .then((res) => res.json())
        .then((data) => setData(data.items))
        .catch((err) => console.log(err));
        
    }
  }, [result]);
  const handleSearch = () => {
    if (name) {
      setResult(name);
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
      <p>Result for : {result}</p>
      <SearchResults data={data} />
    </div>
  );
};

export default SearchPage;
