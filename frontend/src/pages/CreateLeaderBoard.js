import React, { useState } from 'react';
import { createLeaderBoardEntry } from '../api'; // Ensure you're importing the function correctly
const CreateLeaderBoard = () => {
  const [matchID, setMatchID] = useState('');
  const [winner, setWinner] = useState('');
  const [highlights, setHighlights] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createLeaderBoardEntry({ matchID, winner, highlights });
      alert('Leaderboard entry created!');
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
