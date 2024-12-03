const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const matchRoutes = require("./routes/matches");
const leaderboardRoutes = require("./routes/leaderboard");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/matches", matchRoutes);
app.use("/leaderboard", leaderboardRoutes);
//Grouping players and sending mails for Room ID and Password and Adds event to players Google calender

// Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
