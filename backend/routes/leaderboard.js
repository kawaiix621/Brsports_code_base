const express = require("express");
const router = express.Router();
const {
  getLeaderboardById,
  getLeaderboardsByMatchId,
} = require("../controllers/leaderboardController");

// Get a specific leaderboard by ID
router.get("/:id", getLeaderboardById);

// Get all leaderboards for a specific match by matchId
router.get("/", getLeaderboardsByMatchId);

module.exports = router;
