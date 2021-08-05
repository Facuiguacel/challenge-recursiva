import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className="form-control my-2"
      placeholder="Search..."
      type="text"
      id="query"
      name="query"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
