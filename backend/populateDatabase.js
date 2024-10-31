// populateDatabase.js
const admin = require('firebase-admin');
const serviceAccount = require('./config/serviceAccountKey.json'); // Adjust the path if needed

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
   databaseURL: "https://squadup-cb3f3-default-rtdb.firebaseio.com"
});

const db = admin.database();

// Dummy data to populate the database
const dummyData = {
  users: {
    user1: {
      id: "user1",
      username: "player_one",
      email: "player1@example.com",
      wins: 2,
      matchHistory: [
        { match_id: "match1", title: "Championship Game", prize: "$100", position: 1 },
        { match_id: "match2", title: "Friendly Match", prize: "$50", position: 2 },
      ],
    },
    user2: {
      id: "user2",
      username: "player_two",
      email: "player2@example.com",
      wins: 5,
      matchHistory: [
        { match_id: "match3", title: "Tournament", prize: "$200", position: 1 },
        { match_id: "match4", title: "League Match", prize: "$75", position: 3 },
      ],
    },
    user3: {
      id: "user3",
      username: "player_three",
      email: "player3@example.com",
      wins: 0,
      matchHistory: [],
    },
  },
  
 matches: {
    match2: {
      id: "match2",
      title: "CODM Team Deathmatch",
      status: "upcoming",
      participants: ["user2", "user3"],
      roomID: "",
      date: "2024-10-25",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnyiZP2H3Ba74yx5w77H3q82_pGYsFwdsxQ&s",
      timestamp: "2024-10-25T12:00:00Z", // Day after tomorrow
      details: "Fast-paced Call of Duty action.",
      fullDetail: {
        about: "Teams clash in a deathmatch to control the map.",
        rules: [
          "Each match lasts 10 minutes.",
          "Teams must stay in their assigned rooms.",
          "No foul language allowed.",
        ],
        prizePool: "$5,000",
      },
      sponsors: ["Tech Corp", "Gaming Co"],
      links: [
        { name: "Rules", url: "https://match2.com/rules" },
        { name: "Discord", url: "https://discord.gg/teamdeath" },
      ],
    },
    match3: {
      id: "match3",
      title: "FIFA 24 1v1",
      status: "upcoming",
      participants: ["user1", "user4"],
      roomID: "",
      date: "2024-10-26",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg34ScOgZoN1jzm1O5gQ576jnAFnX0F_GoMA&s",
      timestamp: "2024-10-26T14:00:00Z", 
      details: "1v1 FIFA showdown.",
      fullDetail: {
        about: "Two players battle to be the FIFA champion.",
        rules: [
          "Match time is 15 minutes.",
          "No disconnects allowed.",
        ],
        prizePool: "$2,000",
      },
      sponsors: ["EA Sports", "Football Fanatics"],
      links: [
        { name: "Watch Live", url: "https://youtube.com/fifa24" },
        { name: "Join Discord", url: "https://discord.gg/fifa24" },
      ],
    },
    match4: {
      id: "match4",
      title: "Fortnite Solo",
      status: "upcoming",
      participants: ["user5", "user6", "user7"],
      roomID: "",
      date: "2024-10-27",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVX0bw8c73hWeQ8ZUUR2MWKNL6i2HjuBuFA&s",
      timestamp: "2024-10-27T16:00:00Z", 
      details: "Fortnite solo match.",
      fullDetail: {
        about: "A survival match where the last player wins.",
        rules: [
          "No teaming up.",
          "Check-in 15 minutes before the game.",
        ],
        prizePool: "$3,000",
      },
      sponsors: ["Epic Games", "Twitch"],
      links: [
        { name: "Watch on Twitch", url: "https://twitch.tv/fortnitesolo" },
      ],
    },
    match5: {
      id: "match5",
      title: "Valorant Duo Battle",
      status: "upcoming",
      participants: ["user8", "user9", "user10"],
      roomID: "5678-1234",
      date: "2024-10-28",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdT6ffbBAEAQWwDih1aOjSoFI4JfR8IGAAHg&s",
      timestamp: "2024-10-28T18:00:00Z",
      details: "Two-player team showdown in Valorant.",
      fullDetail: {
        about: "Duo teams fight for victory.",
        rules: ["Match time is 20 minutes."],
        prizePool: "$7,000",
      },
      sponsors: ["Riot Games"],
      links: [
        { name: "Join Valorant", url: "https://valorant.com" },
      ],
    },
    match6: {
      id: "match6",
      title: "League of Legends 5v5",
      status: "upcoming",
      participants: ["user1", "user3", "user11", "user12", "user13"],
      roomID: "",
      date: "2024-10-29",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlLSBn5gLJpVSWOXD3XEhR8wErjiKoyjciQ&s",
      timestamp: "2024-10-29T20:00:00Z",
      details: "Classic 5v5 team battle.",
      fullDetail: {
        about: "Teams compete for strategic dominance.",
        rules: ["No toxic behavior."],
        prizePool: "$15,000",
      },
      sponsors: ["Riot Games"],
      links: [{ name: "Match Details", url: "https://lol.com" }],
    },
    match7: {
      id: "match7",
      title: "Rocket League Doubles",
      status: "upcoming",
      participants: ["user14", "user15"],
      roomID: "1111-2222",
      date: "2024-10-30",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_U3U-JfRt_sekHFjenZm6cIPRpN4pNwXlGA&s",
      timestamp: "2024-10-30T22:00:00Z",
      details: "2v2 car soccer.",
      fullDetail: {
        about: "Duo teams compete for the championship.",
        rules: ["Game time is 5 minutes."],
        prizePool: "$1,500",
      },
      sponsors: ["Psyonix"],
      links: [{ name: "Watch Live", url: "https://twitch.tv/rocketleague" }],
    },
    match8: {
      id: "match8",
      title: "Apex Legends Trios",
      status: "upcoming",
      participants: ["user16", "user17", "user18"],
      roomID: "",
      date: "2024-10-31",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdqhKU4ffq58iOooaMAx0dz5VGHi_69oWOA&s",
      timestamp: "2024-10-31T23:00:00Z",
      details: "Trios battle royale.",
      fullDetail: {
        about: "Three-player teams compete to survive.",
        rules: ["No cheating allowed."],
        prizePool: "$4,000",
      },
      sponsors: ["Respawn Entertainment"],
      links: [{ name: "Official Site", url: "https://apexlegends.com" }],
    },
    match9: {
      id: "match9",
      title: "CS:GO 5v5 Tournament",
      status: "upcoming",
      participants: ["user19", "user20", "user21"],
      roomID: "3333-4444",
      date: "2024-11-01",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYkXclnJYQmuj7iSx0dJ5ajZ2j33ccFpNoQ&s",
      timestamp: "2024-11-01T12:00:00Z",
      details: "Tactical shooter tournament.",
      fullDetail: {
        about: "Competitive CS:GO action.",
        rules: ["Best of 3 rounds."],
        prizePool: "$6,000",
      },
      sponsors: ["Valve", "Steam"],
      links: [{ name: "Join Match", url: "https://csgo.com" }],
    },
    match10: {
      id: "match10",
      title: "Overwatch 2 Showdown",
      status: "upcoming",
      participants: ["user22", "user23"],
      roomID: "",
      date: "2024-11-02",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0qrYljiM_HGPoW0Od-hoUAf4WL0AcMl0wQ&s",
      timestamp: "2024-11-02T15:00:00Z",
      details: "Hero-based shooter match.",
      fullDetail: {
        about: "Teams compete with unique hero abilities.",
        rules: ["No duplicate heroes allowed."],
        prizePool: "$8,000",
      },
      sponsors: ["Blizzard"],
      links: [{ name: "Watch Live", url: "https://overwatch.com" }],
    },
  },
  leaderboards: {
    leaderboard1: {
      id: "leaderboard1",
      matchId: "match1",
      title: "Championship Finals",
      winner: "user2",
      date: "2024-10-24",
    },
    leaderboard2: {
      id: "leaderboard2",
      matchId: "match2",
      title: "Regional Qualifiers",
      winner: "user1",
      date: "2024-10-22",
    },
    leaderboard3: {
      id: "leaderboard3",
      matchId: "match3",
      title: "City Championship",
      winner: "user3",
      date: "2024-10-21",
    },
    leaderboard4: {
      id: "leaderboard4",
      matchId: "match4",
      title: "Finals Round 1",
      winner: "user1",
      date: "2024-10-20",
    },
    leaderboard5: {
      id: "leaderboard5",
      matchId: "match5",
      title: "Quarter Finals",
      winner: "user4",
      date: "2024-10-19",
    },
    leaderboard6: {
      id: "leaderboard6",
      matchId: "match6",
      title: "Qualifier Match 1",
      winner: "user5",
      date: "2024-10-18",
    },
    leaderboard7: {
      id: "leaderboard7",
      matchId: "match7",
      title: "Qualifier Match 2",
      winner: "user1",
      date: "2024-10-17",
    },
    leaderboard8: {
      id: "leaderboard8",
      matchId: "match8",
      title: "Round of 16",
      winner: "user2",
      date: "2024-10-16",
    },
    leaderboard9: {
      id: "leaderboard9",
      matchId: "match9",
      title: "Semi Finals",
      winner: "user3",
      date: "2024-10-15",
    },
    leaderboard10: {
      id: "leaderboard10",
      matchId: "match10",
      title: "Finals Round 2",
      winner: "user1",
      date: "2024-10-14",
    },
  },
};


// Function to populate the database
async function populateDatabase() {
  try {
    await db.ref('/').set(dummyData); // Set the entire structure at the root
    console.log("Database populated with dummy data successfully!");
  } catch (error) {
    console.error("Error populating database:", error);
  } finally {
    process.exit(); // Exit the script when done
  }
}
// Run the population function
populateDatabase();
