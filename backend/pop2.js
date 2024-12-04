const admin = require('firebase-admin');
const serviceAccount = require('./config/serviceAccountKey.json'); // Adjust the path if needed

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://squadup-cb3f3-default-rtdb.firebaseio.com"
});

const db = admin.database();

// JSON data to populate the database.  This is now the ENTIRE JSON.
const dummyData = {
  "leaderboards": {
    "leaderboard1": {
      "date": "2024-10-24",
      "id": "leaderboard1",
      "matchId": "match1",
      "title": "Championship Finals",
      "winner": "user2"
    },
    "leaderboard10": {
      "date": "2024-10-14",
      "id": "leaderboard10",
      "matchId": "match10",
      "title": "Finals Round 2",
      "winner": "user1"
    },
    "leaderboard2": {
      "date": "2024-10-22",
      "id": "leaderboard2",
      "matchId": "match2",
      "title": "Regional Qualifiers",
      "winner": "user1"
    },
    "leaderboard3": {
      "date": "2024-10-21",
      "id": "leaderboard3",
      "matchId": "match3",
      "title": "City Championship",
      "winner": "user3"
    },
    "leaderboard4": {
      "date": "2024-10-20",
      "id": "leaderboard4",
      "matchId": "match4",
      "title": "Finals Round 1",
      "winner": "user1"
    },
    "leaderboard5": {
      "date": "2024-10-19",
      "id": "leaderboard5",
      "matchId": "match5",
      "title": "Quarter Finals",
      "winner": "user4"
    },
    "leaderboard6": {
      "date": "2024-10-18",
      "id": "leaderboard6",
      "matchId": "match6",
      "title": "Qualifier Match 1",
      "winner": "user5"
    },
    "leaderboard7": {
      "date": "2024-10-17",
      "id": "leaderboard7",
      "matchId": "match7",
      "title": "Qualifier Match 2",
      "winner": "user1"
    },
    "leaderboard8": {
      "date": "2024-10-16",
      "id": "leaderboard8",
      "matchId": "match8",
      "title": "Round of 16",
      "winner": "user2"
    },
    "leaderboard9": {
      "date": "2024-10-15",
      "id": "leaderboard9",
      "matchId": "match9",
      "title": "Semi Finals",
      "winner": "user3"
    }
  },
  "matches": {
    "match10": {
      "date": "2024-11-02",
      "details": "Hero-based shooter match.",
      "fullDetail": {
        "about": "Teams compete with unique hero abilities.",
        "prizePool": "$8,000",
        "rules": [
          "No duplicate heroes allowed."
        ]
      },
      "id": "match10",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0qrYljiM_HGPoW0Od-hoUAf4WL0AcMl0wQ&s",
      "links": [
        {
          "name": "Watch Live",
          "url": "https://overwatch.com"
        }
      ],
      "participants": [
        "user22",
        "user23",
        "tobiawolaju21@gmail.com"
      ],
      "roomID": "",
      "sponsors": [
        "Blizzard"
      ],
      "status": "upcoming",
      "timestamp": "2024-11-02T15:00:00Z",
      "title": "Overwatch 2 Showdown"
    },
    "match2": {
      "date": "2024-10-25",
      "details": "Fast-paced Call of Duty action.",
      "fullDetail": {
          "about": "Teams clash in a deathmatch to control the map.",
          "prizePool": "$5,000",
          "rules": [
              "Each match lasts 10 minutes.",
              "Teams must stay in their assigned rooms.",
              "No foul language allowed."
          ]
      },
      "id": "match2",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnyiZP2H3Ba74yx5w77H3q82_pGYsFwdsxQ&s",
      "links": [
          {
              "name": "Rules",
              "url": "https://match2.com/rules"
          },
          {
              "name": "Discord",
              "url": "https://discord.gg/teamdeath"
          }
      ],
      "participants": [
          "user1",
          "user2",
          "user3",
          "user4",
          "user5",
          "user6",
          "user7",
          "user8",
          "user9",
          "user10",
          "user11",
          "user12",
          "user13",
          "user14",
          "user15",
          "user16",
          "user17",
          "user18",
          "user19",
          "user20",
          "user21",
          "user22",
          "user23",
          "user24",
          "user25",
          "user26",
          "user27",
          "user28",
          "user29",
          "user30",
          "user31",
          "user32",
          "user33",
          "user34",
          "user35",
          "user36",
          "user37",
          "user38",
          "user39",
          "user40",
          "user41",
          "user42",
          "user43",
          "user44",
          "user45",
          "user46",
          "user47",
          "user48",
          "user49",
          "user50",
          "user51",
          "user52",
          "user53",
          "user54",
          "user55",
          "user56",
          "user57",
          "user58",
          "user59",
          "user60",
          "user61",
          "user62",
          "user63",
          "user64",
          "user65",
          "user66",
          "user67",
          "user68",
          "user69",
          "user70",
          "user71",
          "user72",
          "user73",
          "user74",
          "user75",
          "user76",
          "user77",
          "user78",
          "user79",
          "user80",
          "user81",
          "user82",
          "user83",
          "user84",
          "user85",
          "user86",
          "user87",
          "user88",
          "user89",
          "user90",
          "user91",
          "user92",
          "user93",
          "user94",
          "user95",
          "user96",
          "user97",
          "user98",
          "user99",
          "user100"
      ],
      "roomID": "",
      "sponsors": [
          "Tech Corp",
          "Gaming Co"
      ],
      "status": "upcoming",
      "timestamp": "2024-10-25T12:00:00Z",
      "title": "CODM Team Deathmatch"
  },
    "match3": {
      "date": "2024-10-26",
      "details": "1v1 FIFA showdown.",
      "fullDetail": {
        "about": "Two players battle to be the FIFA champion.",
        "prizePool": "$2,000",
        "rules": [
          "Match time is 15 minutes.",
          "No disconnects allowed."
        ]
      },
      "id": "match3",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg34ScOgZoN1jzm1O5gQ576jnAFnX0F_GoMA&s",
      "links": [
        {
          "name": "Watch Live",
          "url": "https://youtube.com/fifa24"
        },
        {
          "name": "Join Discord",
          "url": "https://discord.gg/fifa24"
        }
      ],
      "participants": [
        "user1",
        "user4",
        "tobiawolaju21@gmail.com"
      ],
      "roomID": "",
      "sponsors": [
        "EA Sports",
        "Football Fanatics"
      ],
      "status": "upcoming",
      "timestamp": "2024-10-26T14:00:00Z",
      "title": "FIFA 24 1v1"
    },
    "match4": {
      "date": "2024-10-27",
      "details": "Fortnite solo match.",
      "fullDetail": {
        "about": "A survival match where the last player wins.",
        "prizePool": "$3,000",
        "rules": [
          "No teaming up.",
          "Check-in 15 minutes before the game."
        ]
      },
      "id": "match4",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVX0bw8c73hWeQ8ZUUR2MWKNL6i2HjuBuFA&s",
      "links": [
        {
          "name": "Watch on Twitch",
          "url": "https://twitch.tv/fortnitesolo"
        }
      ],
      "participants": [
        "user5",
        "user6",
        "user7"
      ],
      "roomID": "",
      "sponsors": [
        "Epic Games",
        "Twitch"
      ],
      "status": "upcoming",
      "timestamp": "2024-10-27T16:00:00Z",
      "title": "Fortnite Solo"
    },
    "match5": {
      "date": "2024-10-28",
      "details": "Two-player team showdown in Valorant.",
      "fullDetail": {
        "about": "Duo teams fight for victory.",
        "prizePool": "$7,000",
        "rules": [
          "Match time is 20 minutes."
        ]
      },
      "id": "match5",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdT6ffbBAEAQWwDih1aOjSoFI4JfR8IGAAHg&s",
      "links": [
        {
          "name": "Join Valorant",
          "url": "https://valorant.com"
        }
      ],
      "participants": [
        "user8",
        "user9",
        "user10"
      ],
      "roomID": "5678-1234",
      "sponsors": [
        "Riot Games"
      ],
      "status": "upcoming",
      "timestamp": "2024-10-28T18:00:00Z",
      "title": "Valorant Duo Battle"
    },
    "match6": {
      "date": "2024-10-29",
      "details": "Classic 5v5 team battle.",
      "fullDetail": {
        "about": "Teams compete for strategic dominance.",
        "prizePool": "$15,000",
        "rules": [
          "No toxic behavior."
        ]
      },
      "id": "match6",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlLSBn5gLJpVSWOXD3XEhR8wErjiKoyjciQ&s",
      "links": [
        {
          "name": "Match Details",
          "url": "https://lol.com"
        }
      ],
      "participants": [
        "user1",
        "user3",
        "user11",
        "user12",
        "user13"
      ],
      "roomID": "",
      "sponsors": [
        "Riot Games"
      ],
      "status": "upcoming",
      "timestamp": "2024-10-29T20:00:00Z",
      "title": "League of Legends 5v5"
    },
    "match7": {
      "date": "2024-10-30",
      "details": "2v2 car soccer.",
      "fullDetail": {
        "about": "Duo teams compete for the championship.",
        "prizePool": "$1,500",
        "rules": [
          "Game time is 5 minutes."
        ]
      },
      "id": "match7",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_U3U-JfRt_sekHFjenZm6cIPRpN4pNwXlGA&s",
      "links": [
        {
          "name": "Watch Live",
          "url": "https://twitch.tv/rocketleague"
        }
      ],
      "participants": [
        "user14",
        "user15"
      ],
      "roomID": "1111-2222",
      "sponsors": [
        "Psyonix"
      ],
      "status": "upcoming",
      "timestamp": "2024-10-30T22:00:00Z",
      "title": "Rocket League Doubles"
    },
    "match8": {
      "date": "2024-10-31",
      "details": "Trios battle royale.",
      "fullDetail": {
        "about": "Three-player teams compete to survive.",
        "prizePool": "$4,000",
        "rules": [
          "No cheating allowed."
        ]
      },
      "id": "match8",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdqhKU4ffq58iOooaMAx0dz5VGHi_69oWOA&s",
      "links": [
        {
          "name": "Official Site",
          "url": "https://apexlegends.com"
        }
      ],
      "participants": [
        "user16",
        "user17",
        "user18"
      ],
      "roomID": "",
      "sponsors": [
        "Respawn Entertainment"
      ],
      "status": "upcoming",
      "timestamp": "2024-10-31T23:00:00Z",
      "title": "Apex Legends Trios"
    },
    "match9": {
      "date": "2024-11-01",
      "details": "Tactical shooter tournament.",
      "fullDetail": {
        "about": "Competitive CS:GO action.",
        "prizePool": "$6,000",
        "rules": [
          "Best of 3 rounds."
        ]
      },
      "id": "match9",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYkXclnJYQmuj7iSx0dJ5ajZ2j33ccFpNoQ&s",
      "links": [
        {
          "name": "Join Match",
          "url": "https://csgo.com"
        }
      ],
      "participants": [
        "user19",
        "user20",
        "user21"
      ],
      "roomID": "3333-4444",
      "sponsors": [
        "Valve",
        "Steam"
      ],
      "status": "upcoming",
      "timestamp": "2024-11-01T12:00:00Z",
      "title": "CS:GO 5v5 Tournament"
    },
    "match1": {
      "date": "2024-10-24",
      "details": "Grand Final Match",
      "fullDetail": {
        "about": "The final match of the tournament",
        "prizePool": "$1000",
        "rules": [
          "No cheating"
        ]
      },
      "id": "match1",
      "img": "https://via.placeholder.com/350x150",
      "links": [],
      "participants": [
        "user1",
        "user2"
      ],
      "roomID": "",
      "sponsors": [],
      "status": "completed",
      "timestamp": "2024-10-24T12:00:00Z",
      "title": "Grand Final"
    }
  },
  "users": {
    "davidtimilehin17": {
      "createdAt": "2024-11-02T08:43:53.464Z",
      "email": "davidtimilehin17@gmail.com",
      "id": "davidtimilehin17",
      "img": "https://lh3.googleusercontent.com/a/ACg8ocKNBsVT44jGimpN_RXXgPBG1PVlfNlB_DAaH8VIhfFPVQaS0lpt=s96-c",
      "username": "Timtech",
      "wins": 0
    },
    "dunsieman": {
      "createdAt": "2024-11-12T19:34:21.466Z",
      "email": "dunsieman@gmail.com",
      "id": "dunsieman",
      "img": "https://lh3.googleusercontent.com/a/ACg8ocIdWtvocAP8tApTRJHlnHeA16Kwh77c0_o7rPgqqsXBv65RjQ=s96-c",
      "username": "Emmanuel Thomas",
      "wins": 0
    },
    "ioT9IgzfA5OnzoncLiFf7U9sCN73": {
      "createdAt": "2024-12-01T14:15:47.285Z",
      "email": "N/A",
      "id": "ioT9IgzfA5OnzoncLiFf7U9sCN73",
      "img": "https://pbs.twimg.com/profile_images/1856159911383638016/kCBoq2qP_normal.jpg",
      "username": "kawaii",
      "wins": 0
    },
    "samsonadebowale890": {
      "createdAt": "2024-11-11T22:01:46.201Z",
      "email": "samsonadebowale890@gmail.com",
      "id": "samsonadebowale890",
      "img": "https://lh3.googleusercontent.com/a/ACg8ocJRHXnhwlFo5yGK_jZrLGBYxgiXCiu_BtI72lPkD4Hkd6GSuncg=s96-c",
      "username": "Samson Tobi",
      "wins": 0
    },
    "tobiawolaju21": {
      "createdAt": "2024-11-01T11:17:31.771Z",
      "email": "tobiawolaju21@gmail.com",
      "id": "tobiawolaju21",
      "img": "https://lh3.googleusercontent.com/a/ACg8ocK-2dBKGKCMDI0og0gJa-tdeAo5EUd41dtXQ7sijL6UBYqGc5uj=s96-c",
      "matchHistory": [
        {
          "match_id": "match10",
          "position": "Pending",
          "prize": "$8,000",
          "title": "Overwatch 2 Showdown"
        },
        {
          "match_id": "match2",
          "position": "Pending",
          "prize": "$5,000",
          "title": "CODM Team Deathmatch"
        },
        {
          "match_id": "match3",
          "position": "Pending",
          "prize": "$2,000",
          "title": "FIFA 24 1v1"
        }
      ],
      "username": "Tobi Awolaju",
      "wins": 0
    },
    "user1": {
      "email": "player1@example.com",
      "id": "user1",
      "matchHistory": [
        {
          "match_id": "match1",
          "position": 1,
          "prize": "$100",
          "title": "Championship Game"
        },
        {
          "match_id": "match2",
          "position": 2,
          "prize": "$50",
          "title": "Friendly Match"
        }
      ],
      "username": "player_one",
      "wins": 2
    },
    "user2": {
      "email": "player2@example.com",
      "id": "user2",
      "matchHistory": [
        {
          "match_id": "match3",
          "position": 1,
          "prize": "$200",
          "title": "Tournament"
        },
        {
          "match_id": "match4",
          "position": 3,
          "prize": "$75",
          "title": "League Match"
        }
      ],
      "username": "player_two",
      "wins": 5
    },
    "user3": {
      "email": "player3@example.com",
      "id": "user3",
      "username": "player_three",
      "wins": 0
    }
  }
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