const { db } = require("../firebase");

const getAllMatches = async () => {
  const matchesRef = db.collection("matches");
  const snapshot = await matchesRef.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const registerUserForMatch = async (matchId, userId) => {
  const matchRef = db.collection("matches").doc(matchId);
  await matchRef.update({
    registeredPlayers: admin.firestore.FieldValue.arrayUnion(userId),
  });
};

module.exports = { getAllMatches, registerUserForMatch };
