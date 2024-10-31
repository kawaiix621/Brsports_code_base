import React from "react";
import './MatchHistory.css'

const MatchHistory = ({ matches }) => {
  return (
    <div className="match-history">
      <table>
        <thead>
          <tr>
            <th>Match ID</th>
            <th>Title</th>
            <th>Prize</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {matches.length > 0 ? (
            matches.map((match, index) => (
              <tr key={index}>
                <td>{match.match_id}</td>
                <td>{match.title}</td>
                <td>{match.prize}</td>
                <td>{match.position}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No match history available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MatchHistory;
