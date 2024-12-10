import React from 'react';

const Pagination = ({ page, totalPages, onPreviousPage, onNextPage }) => (
    <div className="pagination">
        <button onClick={onPreviousPage} disabled={page <= 0}>
            Previous
        </button>
        <span>
            Page {page + 1} / {totalPages}
        </span>
        <button onClick={onNextPage} disabled={page >= totalPages - 1}>
            Next
        </button>
    </div>
);

const handlePreviousPage = (setPage) => setPage((prev) => Math.max(0, prev - 1));
const handleNextPage = (setPage) => setPage((prev) => prev + 1);

export { Pagination, handlePreviousPage, handleNextPage };