import React from "react";

function Bookmark({ Bookmark }) {
  return (
    <>
      <p>{Bookmark.item_id} {Bookmark.annotation}</p>
    </>
  );
}

export default Bookmark;
