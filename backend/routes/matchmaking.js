const express = require("express");
const { getMatches, registerMatch } = require("../controllers/matchController");
const router = express.Router();

router.get("/", match);        // Get specific match ID 

module.exports = router;
