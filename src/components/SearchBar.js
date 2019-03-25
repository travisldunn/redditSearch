import React from "react";

const SearchBar = ({ onChange, onSubmit }) => {
  return (
    <div className="search">
      <form data-testid="search-form" onSubmit={onSubmit}>
        <input
          data-testid="input"
          type="text"
          name="query"
          className="searchBar"
          placeholder="Search for a subreddit..."
          onChange={e => onChange(e.currentTarget.value)}
        />
        <button className="button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
