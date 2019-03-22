import React from "react";

const SearchBar = ({ onChange, onSubmit }) => {
  return (
    <div className="search">
      <form onSubmit={(e => e.preventDefault(), onSubmit)}>
        <input
          type="text"
          name="query"
          className="searchBar"
          placeholder="Search for a subreddit..."
          onChange={e => onChange(e.currentTarget.value)}
        />
        <input className="button" value="Search" type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
