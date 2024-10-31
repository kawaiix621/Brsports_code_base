import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./LeaderBoard.css"; // Optional: Add CSS for styling

const LeaderBoard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const matchId = searchParams.get("matchId");
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("normal"); // 'normal' or 'user-focused'

  const fetchLeaderboard = async (id) => {
    try {
      const response = await fetch(`https://brsports-code-base.onrender.com/leaderboard?matchId=${id}`);
      if (response.ok) {
        const data = await response.json();
        return data[0]; // Assuming each match returns a single object in an array
      }
    } catch (error) {
      console.error(`Error fetching leaderboard for match ${id}:`, error);
    }
    return null; // Return null if no data or error occurs
  };

  useEffect(() => {
    const loadLeaderboards = async () => {
      setLoading(true);
      const allLeaderboards = [];

      // Try to load cached data
      const cachedData = localStorage.getItem("leaderboardData");
      if (cachedData) {
        setLeaderboardData(JSON.parse(cachedData));
        setLoading(false);
      }

      // Fetch latest data and update in the background
      if (matchId) {
        const data = await fetchLeaderboard(matchId);
        if (data) allLeaderboards.push(data);
      } else {
        for (let i = 1; i <= 10; i++) {
          const data = await fetchLeaderboard(`match${i}`);
          if (data) allLeaderboards.push(data);
          else break;
        }
      }
      
      setLeaderboardData(allLeaderboards);
      setLoading(false);

      // Save data to localStorage for offline access
      localStorage.setItem("leaderboardData", JSON.stringify(allLeaderboards));
    };

    loadLeaderboards();
  }, [matchId]);

  const calculateUserWins = () => {
    const wins = {};

    // Aggregate the number of wins for each user
    leaderboardData.forEach((entry) => {
      const { winner } = entry;
      wins[winner] = (wins[winner] || 0) + 1;
    });

    // Convert the object to an array and sort by wins (descending order)
    const sortedWins = Object.entries(wins)
      .map(([user, winCount]) => ({ user, wins: winCount }))
      .sort((a, b) => b.wins - a.wins);

    const resultsWithPosition = [];
    let currentPosition = 1;
    sortedWins.forEach((entry, index) => {
      if (index > 0 && entry.wins < sortedWins[index - 1].wins) {
        currentPosition = index + 1; // Update the position only if wins are different
      }
      resultsWithPosition.push({ ...entry, position: currentPosition });
    });
    return resultsWithPosition;
  };

  const assignPositions = (sortedWins) => {
    const positions = [];
    let currentRank = 1;
    sortedWins.forEach((entry, index) => {
      if (index > 0 && entry.wins < sortedWins[index - 1].wins) {
        currentRank = index + 1; // Update rank only if wins differ
      }
      positions.push({ ...entry, position: currentRank });
    });
    return positions;
  };

  const handleViewChange = (mode) => setViewMode(mode);

  if (loading) {
    return (
      <div style={{ height: "60px" }}>
        <p>Loading leaderboard...</p>
      </div>
    );
  }

  if (leaderboardData.length === 0) {
    return <p>No leaderboard data available.</p>;
  }

  return (
    <div style={{ marginTop: "80px" }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
        <button onClick={() => handleViewChange("normal")}>
          Global
        </button>
        <button onClick={() => handleViewChange("user-focused")}>
          My Rank
        </button>
      </div>
      {viewMode === "normal" ? (
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Match ID</th>
              <th>Title</th>
              <th>Winner</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.matchId}</td>
                <td>{entry.title}</td>
                <td>{entry.winner}</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Wins</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {assignPositions(calculateUserWins()).map((entry) => (
              <tr
                key={entry.user}
                className={entry.user === "user1" ? "highlight-row" : ""}
              >
                <td>{entry.user}</td>
                <td>{entry.wins}</td>
                <td>{entry.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeaderBoard;
