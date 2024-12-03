const { db } = require("../firebase");  // Assuming db is the Firebase Realtime Database reference

// Function to get json for specific matche from Realtime Database based on match id
const matchmake = async (req, res) => {
  const matchID = req.params.id;  // Extract Match ID from URL params

  try {
    const snapshot = await db.ref(`matches/${matchID}`).once("value");
    const matchjson = snapshot.val();

    if (matchjson) {

      // extract the player list from this json
      get key players injson(matchjson);

      //group them and return the new json
      function grouplayers(player from json matchJson ){
      //do the magic and return
      res.status(200).json(matchjson);

      }

    } else {
      res.status(404).json({ error: "match data not found for the given match ID" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }


};


module.exports = {matchmake};



