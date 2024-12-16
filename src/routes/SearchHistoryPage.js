import React, { useEffect, useState } from "react";
import { useUser } from "../Contexts/UserContext";
import fetchData from "../Components/FetchData";

const SearchHistoryPage = () => {
  const { user } = useUser();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!user || !user.id) {
        setError("You must be logged in to view search history.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetchData(`api/SearchHistory/User/${user.id}`);
        if (Array.isArray(response)) {
          setHistory(response);
        } else {
          throw new Error("Unexpected response format.");
        }
      } catch (err) {
        console.error("Failed to fetch search history:", err);
        setError("Failed to load search history.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [user]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1 style={{ color: "red" }}>{error}</h1>;

  return (
    <div>
      <h1>Search History</h1>
      {history.length > 0 ? (
        history.map((item) => (
          <div key={item.searchId}>
            <h3>Search Term: {item.searchTerm}</h3>
            <p>Date: {new Date(item.searchDate).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No search history available.</p>
      )}
    </div>
  );
};

export default SearchHistoryPage;
