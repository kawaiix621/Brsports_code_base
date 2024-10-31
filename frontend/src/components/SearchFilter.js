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

      <div 
      style={{
        display:'flex',
        overflowX:'scroll',
        height:'auto',
        padding:'0px'
      }}>
      <button 
          className={`searchbtn ${activeButton === "" ? "activeX" : ""}`} 
          onClick={() => handleFilterClick("")}
          style={{ width: 'min-content' }}
        >
          All
        </button>

        <button 
          className={`searchbtn ${activeButton === "Call of Duty" ? "activeX" : ""}`} 
          onClick={() => handleFilterClick("Call of Duty")}
        >
          call_of_duty
        </button>

        <button 
          className={`searchbtn ${activeButton === "COD Warzone Mobile" ? "activeX" : ""}`} 
          onClick={() => handleFilterClick("COD Warzone Mobile")}
        >
          cod_warzone_mobile
        </button>
        
        <button 
          className={`searchbtn ${activeButton === "Free Fire" ? "activeX" : ""}`} 
          onClick={() => handleFilterClick("Free Fire")}
        >
          free_fire
        </button>

        <button 
          className={`searchbtn ${activeButton === "Blood Strike" ? "activeX" : ""}`} 
          onClick={() => handleFilterClick("Blood Strike")}
        >
          blood_strike
        </button>

        <button 
          className={`searchbtn ${activeButton === "Farlight 84" ? "activeX" : ""}`} 
          onClick={() => handleFilterClick("Farlight 84")}
        >
          Farlight_84
        </button>

        <button 
          className={`searchbtn ${activeButton === "PUBG Mobile" ? "activeX" : ""}`} 
          onClick={() => handleFilterClick("PUBG Mobile")}
        >
          PUBG_mobile
        </button>
      
      </div>
    </div>
  );
};

export default SearchFilter;
