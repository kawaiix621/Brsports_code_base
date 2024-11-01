import React, { useState } from 'react';
import { createLeaderBoardEntry } from '../api'; // Ensure you're importing the function correctly

const CreateLeaderBoard = () => {
  const [matchID, setMatchID] = useState('');
  const [winner, setWinner] = useState('');
  const [highlights, setHighlights] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Generate a unique leaderboard entry ID
      const leaderboardEntryID = `leaderboard_${Date.now()}`;

      // Define the leaderboard entry data
      const leaderboardData = {
        id: leaderboardEntryID, // Assign the generated ID
        matchId: matchID,  // Use matchID for the 'matchId' key
        title: '', // You might need to get the title from elsewhere, maybe from the match data 
        winner,
        highlights,
        date: new Date().toISOString() // Add a timestamp for the entry
      };

      // Send the data to your API function
      await createLeaderBoardEntry(leaderboardData);
      alert('Leaderboard entry created!');

      // Clear input fields
      setMatchID('');
      setWinner('');
      setHighlights('');

    } catch (err) {
      console.error(err);
      alert('Failed to create leaderboard entry');
    }
  };

  return (
    <div className="form-container">
      <h2>Create LeaderBoard Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Match ID"
          value={matchID}
          onChange={(e) => setMatchID(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Winner"
          value={winner}
          onChange={(e) => setWinner(e.target.value)}
          required
        />
        <textarea
          placeholder="Highlights"
          value={highlights}
          onChange={(e) => setHighlights(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Winner</button>
      </form>
    </div>
  );
};

export default CreateLeaderBoard;