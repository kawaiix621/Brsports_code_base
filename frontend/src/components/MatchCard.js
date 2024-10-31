// MatchCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./MatchCard.css";

// Helper function to calculate time difference
const getTimeDifference = (timestamp) => {
  const now = new Date();
  const matchDate = new Date(timestamp);
  const differenceInMs = matchDate - now;

  const days = Math.ceil(Math.abs(differenceInMs) / (1000 * 60 * 60 * 24)); 

  if (differenceInMs > 0) {
    return `Starts in ${days} day${days > 1 ? 's' : ''}`;
  } else {
    return `Completed ${days} day${days > 1 ? 's' : ''} ago`;
  }
};

const MatchCard = ({ match }) => {
  return (
    <Link 
      to={`/matches/${match.id}`} 
      state={{ match }} 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="matchcard">
      
       <div>
       <img src={match.img || "bg.jpg"} alt={`${match.title} background`} />
        <p className="status">{getTimeDifference(match.timestamp)}</p>
        </div>
        
        <h2>{match.title}</h2>
        <p className="prize">{match.fullDetail.prizePool}</p>
       <p>{match.details}</p>
        </div>
    </Link>
  );
};

export default MatchCard;
