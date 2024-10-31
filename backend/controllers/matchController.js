const { db } = require("../firebase");  // Assuming db is the Firebase Realtime Database reference

// Function to get all matches from Realtime Database
const getMatches = async (req, res) => {
  try {
    const matchesRef = db.ref("matches");  // Realtime Database reference
    const snapshot = await matchesRef.once("value");  // Fetch data once
    const matches = snapshot.val();  // Extract data
    res.json(matches);  // Send the matches as a response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to register a player to a match in Realtime Database
const registerMatch = async (req, res) => {
  const matchId = req.params.id;
  const { userId } = req.body;
  try {
    const matchRef = db.ref(`matches/${matchId}/registeredPlayers`);  // Reference to the registered players list
    await matchRef.push(userId);  // Add the userId to the registered players array
    res.status(200).json({ message: "Registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getMatches, registerMatch };
