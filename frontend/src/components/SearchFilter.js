import React, { useState } from "react";
import "./SearchFilter.css";

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [activeButton, setActiveButton] = useState("");

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
    setActiveButton(title); // Set the clicked button as active
  };

  return (
    <div>
      <div className="searchfilter">
        <input 
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="What do you want to play?"
        />
      </div>
      <div>
      <button 
          className={`searchbtn ${activeButton === "" ? "activeX" : ""}`} 
          onClick={() => handleFilterClick("")}
          style={{ width: 'min-content' }}
        >
          All
        </button>

        <button 
          className={`searchbtn ${activeButton === "codm" ? "activeX" : ""}`} 
          onClick={() => handleFilterClick("codm")}
        >
          Discover something new
        </button>

        <button 
          className={`searchbtn ${activeButton === "Fortnite" ? "activeX" : ""}`} 
          onClick={() => handleFilterClick("Fortnite")}
        >
          Daily
        </button>
        
        <button 
          className={`searchbtn ${activeButton === "Free Fire" ? "activeX" : ""}`} 
          onClick={() => handleFilterClick("Free Fire")}
        >
          Sponsored
        </button>
      
      </div>
    </div>
  );
};

export default SearchFilter;
