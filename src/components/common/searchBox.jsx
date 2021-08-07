import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <input
      className="form-control my-2"
      placeholder="Buscar ciudad..."
      type="text"
      id="query"
      name="query"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.currentTarget.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter" && searchQuery !== "") {
          onSearch(searchQuery);
        }
      }}
    />
  );
};

export default SearchBox;
