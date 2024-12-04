import React, { useState } from "react";


const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Send the search query to the parent
  };

  return (
<div  className="searchdiv">
     <div className="searchfilter">
        <input 
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search games"
        />
      </div>

    </div>
  );
};

export default SearchFilter;
