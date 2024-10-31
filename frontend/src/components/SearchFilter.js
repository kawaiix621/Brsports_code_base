import React, { useState } from "react";
import "./SearchFilter.css";

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Send the search query to the parent
  };

  // Handle button click to filter by game title
  const handleFilterClick = (title) => {
    setQuery(title);
    onSearch(title); // Trigger the search with the game title
  };

  return (
    <div>
      <div className="searchfilter">
        <input 
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search games by title..."
        />
      </div>
      <div>
    
        <button 
          className="searchbtn" 
          onClick={() => handleFilterClick("codm")}
        >
          Daily
         
        </button>
        <button 
          className="searchbtn" 
          onClick={() => handleFilterClick("Fortnite")}
        >
          Weekly
         
        </button>
        <button 
          className="searchbtn" 
          onClick={() => handleFilterClick("Free Fire")}
        >
          Sponsored
          
        </button>

        <button style={
          {
            width:'min-content'
          }
        }
          className="searchbtn" 
          onClick={() => handleFilterClick("")}
        >
         All.
        </button>

      </div>
    </div>
  );
};

export default SearchFilter;
