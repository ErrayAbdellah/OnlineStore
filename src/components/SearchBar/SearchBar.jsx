import React from 'react';
import './SearchBar.css';

export default function SearchBar ({ searchQuery, setSearchQuery }){
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

