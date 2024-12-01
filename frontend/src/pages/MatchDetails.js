import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { get, db, ref, update } from "../firebase"; // Firebase config
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Firebase auth
import "./MatchDetails.css";
// Helper function to calculate time difference
const getTimeDifference = (timestamp) => {
  const now = new Date();
  const matchDate = new Date(timestamp);
  const differenceInMs = matchDate - now;
  const days = Math.ceil(Math.abs(differenceInMs) / (1000 * 60 * 60 * 24));
  return differenceInMs > 0
    ? `Starts in ${days} day${days > 1 ? "s" : ""}`
    : `Completed ${days} day${days > 1 ? "s" : ""} ago`;
};
const MatchDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  const match = location.state?.match;
  const [participants, setParticipants] = useState(match?.participants || []);
  const [currentUser, setCurrentUser] = useState(null);
  // Check if the user is authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user); // Store the authenticated user
      } else {
        setCurrentUser(null); // Clear user if not logged in
      }
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, [auth]);
  const handleRegister = async () => {
    if (!currentUser) {
      alert("You need to sign in to register for this match.");
      return navigate("/signin"); // Redirect to sign-in page
    }
    const newParticipant = currentUser.email; // Use the user's email for registration
    if (!participants.includes(newParticipant)) {
      const updatedParticipants = [...participants, newParticipant];
      try {
        // Update the participants in the match entry
        const matchRef = ref(db, `matches/${match.id}`);
        await update(matchRef, { participants: updatedParticipants });
        // Now, add the match to the user's match history
        const userID = currentUser.email.split('@')[0]; // Use email prefix as user ID
        const userRef = ref(db, `users/${userID}/matchHistory`);
        // Get the user's current match history
        const snapshot = await get(userRef);
        const matchHistory = snapshot.exists() ? snapshot.val() : [];
        // Add the current match to the history
        const newMatch = {
          match_id: match.id,
          title: match.title,
          prize: match.fullDetail.prizePool,
          position: "Pending", // Default value; can be updated later
        };
        const updatedHistory = [...matchHistory, newMatch];
        await update(ref(db, `users/${userID}`), { matchHistory: updatedHistory });
        // Update participants in state and notify the user
        setParticipants(updatedParticipants);
        alert(`You have successfully registered for the match: ${match.title}`);
      } catch (error) {
        console.error("Error updating match or user history:", error);
        alert("Failed to register. Please try again.");
      }
    } else {
      alert(`You are already registered for this match.`);
    }
  };
  const handleViewLeaderboard = () => {
    navigate(`/leaderboard?matchId=${id}`);
  };
  if (!match) {
    return <h1>Match not found</h1>;
  }
  return (
    <div className="matchdetails" style={{ padding: "20px" }}>
      <div style={{ height: "60px" }}></div>
      <img
        src={match.img || "bg.jpg"}
        alt={`${match.title} banner`}
        style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
      />
      <h1>{match.title}</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={handleViewLeaderboard}>
          Results
        </button>
        <button onClick={handleRegister} style={{ marginRight: "10px" }}>
          Join Match
        </button>
      </div>
      <div style={{
        height: '30px'
      }}>
      </div>
      <h3 className="pop-left2">About the Match</h3>
      <p className="pop-right2">{match.fullDetail.about}</p>
      <p className="pop-left2">Prize</p>
      <p className="pop-right2">{match.fullDetail.prizePool}</p>
      <p className="pop-left2">Time
      </p>
      <p className="pop-right2">{getTimeDifference(match.timestamp)}</p>

      <p style={{
        height: '0px',
        opacity: '0%'
      }}
      ><strong>Participants:</strong> {participants.join(", ")}</p>
      <p className="pop-left2">
        Room Id
      </p>
      <p className="pop-right2">
        {match.roomID || "TBA"}
      </p>


      <h3 className="pop-left2"> Match Sponsors</h3>
      <ul className="pop-right2">
        {match.sponsors.map((sponsor, index) => (
          <li key={index}>
            {typeof sponsor === "string" ? sponsor : sponsor.name}
          </li>
        ))}
      </ul>
      <p className="pop-left2">Match Rules</p>
      <ul className="pop-right2">
        {match.fullDetail.rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
      <ul className="pop-right2">
        {match.links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ height: "60px" }}></div>
    </div>
  );
};
export default MatchDetails;
