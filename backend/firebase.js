const admin = require("firebase-admin");
const serviceAccount = require("./config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://squadup-cb3f3-default-rtdb.firebaseio.com"
});

const db = admin.database();
const auth = admin.auth();

module.exports = { db, auth };
