import React, { useState } from "react";
import { InputGroup, Button, FormControl, Spinner } from "react-bootstrap";

const SearchBox = ({ onSearch, isSearching }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <InputGroup className="my-2">
      <FormControl
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
        aria-describedby="basic-addon2"
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        disabled={isSearching}
        onClick={(e) =>
          !isSearching && searchQuery !== "" ? onSearch(searchQuery) : null
        }
      >
        {!isSearching ? (
          <i className="bi bi-search"></i>
        ) : (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
      </Button>
    </InputGroup>
  );
};

export default SearchBox;
