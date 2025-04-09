// src/components/RecentSearches.js
import React from 'react';

function RecentSearches({ searches, onSelect }) {
  return (
    <div className="recent-searches">
      <h3>Recent Searches</h3>
      <div className="search-list">
        {searches.map((search, index) => (
          <button 
            key={index} 
            className="search-item" 
            onClick={() => onSelect(search)}
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;