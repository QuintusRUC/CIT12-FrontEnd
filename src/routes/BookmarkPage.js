import React from "react";
import { useEffect, useState } from "react";
import Bookmark from "../Componant/Bookmark";

const BookmarkPage = ({ user }) => {
  const [bookmark, setBookmark] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(-1);
  const fetchString =
    "https://localhost:3000/GetBookmarksDb/Search?userId=" + user.id;
  useEffect(() => {
    fetch(fetchString + "&page=" + page)
      .then((response) => response.json())
      .then((data) => {
        setBookmark(data.items);
        setTotalPage(data.NumberPages);
        setLoading(false);
      });
  }, [page]);
  if (Loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Your Bookmark</h1>
      {bookmark.map((item) => Bookmark(item))}
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

export default BookmarkPage;
