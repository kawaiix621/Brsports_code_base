const { db } = require("../firebase");

// Get a specific leaderboard entry by ID
const getLeaderboardById = async (req, res) => {
  const leaderboardId = req.params.id;  // Extract leaderboard ID from URL params

  try {
    const snapshot = await db.ref(`leaderboards/${leaderboardId}`).once("value");
    const leaderboard = snapshot.val();

    if (leaderboard) {
      res.status(200).json(leaderboard);
    } else {
      res.status(404).json({ error: "Leaderboard not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all leaderboards for a specific match
const getLeaderboardsByMatchId = async (req, res) => {
  const { matchId } = req.query;  // Extract matchId from query parameters

  try {
    const snapshot = await db.ref("leaderboards").once("value");
    const leaderboards = snapshot.val() || {};

    // Filter leaderboards based on the provided matchId
    const filteredLeaderboards = Object.values(leaderboards).filter(
      (entry) => entry.matchId === matchId
    );

    if (filteredLeaderboards.length > 0) {
      res.status(200).json(filteredLeaderboards);
    } else {
      res.status(404).json({ error: "No leaderboards found for the given match" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getLeaderboardById, getLeaderboardsByMatchId };
