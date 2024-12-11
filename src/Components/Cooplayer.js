import React from "react";
import { useEffect, useState } from "react";
import fetchData from "./FetchData";

const CoplayerPage = ({ actorName }) => {
  const [Coplayer, setCoplayer] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData("api/FindCoplayers/Search?actorName=" + actorName)
      .then((response) => response.json())
      .then((data) => {
        setCoplayer(data);
        setLoading(false);
      });
  }, [actorName]);
  if (Loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Coplayer</h1>
      {Coplayer.map((item) => (
        <div>
          <h3>{item.search_term}</h3>
          <p>{item.search_date}</p>
        </div>
      ))}
    </div>
  );
};

export default CoplayerPage;
