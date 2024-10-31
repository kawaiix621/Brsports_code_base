const express = require("express");
const { getMatches, registerMatch } = require("../controllers/matchController");
const router = express.Router();

router.get("/", getMatches);        // Get all matches
router.post("/register/:id", registerMatch); // Register user for a match

module.exports = router;
