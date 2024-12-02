import React, { useEffect, useState } from "react";
import { getMatches } from "../api";
import MatchCard from "../components/MatchCard";
import SearchFilter from "../components/SearchFilter"; // Import the filter
import Ads from "../components/Ads"; // Import ads

const adsData = [
  { img: 'ad4.jpg', redirectUrl: 'https://www.example.com/page1' },
  { img: 'ad3.jpg', redirectUrl: 'https://www.example.com/page2' },
  { img: 'ad4.jpg', redirectUrl: 'https://www.example.com/page3' },
  { img: 'ad3.jpg' , redirectUrl: 'https://www.example.com/page4' },
];



const CACHE_KEY = "cachedMatches"; // Key for localStorage
const Home = () => {
  const [matches, setMatches] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  // Load from cache if available
  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const matchesArray = JSON.parse(cachedData);
      setMatches(matchesArray);
      setFilteredMatches(matchesArray);
    }
    // Fetch new data from Firebase and update cache
    getMatches()
      .then((data) => {
        const matchesArray = Object.values(data);
        setMatches(matchesArray);
        setFilteredMatches(matchesArray);
        localStorage.setItem(CACHE_KEY, JSON.stringify(matchesArray)); // Cache the data
      })
      .catch((error) => {
        console.error("Error fetching matches:", error);
      });
  }, []);
  // Filter matches based on search query
  const handleSearch = (query) => {
    const filtered = matches.filter((match) =>
      match.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMatches(filtered);
  };
  return (

    <div>
      <div style={{ height: "70px" }}></div>


      <Ads adsData={adsData} />

<div className="maindiv">

      {/* Search Filter */}
      <SearchFilter onSearch={handleSearch} />


      <div className="matches">
      {/* Matches */}
      {filteredMatches.length > 0 ? (
        filteredMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))
      ) : (
        <p>No matches found.</p>
      )}
      </div>
</div>

     

    </div>

  );
};
export default Home;
