// src/components/SearchBar.js
import React from 'react';

function SearchBar({ city, setCity, handleSearch }) {
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;