import React, { useState, useEffect, useCallback } from "react";
import Bookmark from "../Components/Bookmark";

const BookmarkPage = ({ user }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  const fetchBookmarks = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:5221/api/GetBookmarksDb/Search?userId=${user.id}&page=${currentPage}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch bookmarks");
      }

      const data = await response.json();
      setBookmarks(data.items);
      setTotalPages(data.numberPages);
      setError(null);
    } catch (err) {
      setError(err.message || "An unknown error occurred");
      setBookmarks([]);
    } finally {
      setIsLoading(false);
    }
  }, [user.id, currentPage]);

  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bookmark-page">
      <h1>Your Bookmarks : </h1>

      {bookmarks.length === 0 ? (
        <p>No bookmarks found.</p>
      ) : (
        <>
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.bookmark_id} Bookmark={bookmark} />
          ))}
        </>
      )}

      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookmarkPage;
