import React from "react";
import { useEffect, useState } from "react";
import fetchData from "../Components/FetchData";

const HistoryPage = ({ user }) => {
  const [History, setHistory] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData("api/SearchHistory ")
      .then((response) => response.json())
      .then((data) => {
        setHistory(data);
        setLoading(false);
      });
  }, []);
  if (Loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>History</h1>
      {History.map((item) => (
        <div>
          <h3>{item.search_term}</h3>
          <p>{item.search_date}</p>
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;
