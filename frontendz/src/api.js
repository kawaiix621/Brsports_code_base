                        const BASE_URL = "https://brsports.onrender.com";//let get it

// Fetch all matches
export const getMatches = async () => {
  const response = await fetch(`${BASE_URL}/matches`);
  return response.json();
};


// User sign-in
export const signIn = async (userData) => {
  const response = await fetch(`${BASE_URL}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

// Create a new match (admin)
export const createMatch = async (matchData) => {
  const response = await fetch(`${BASE_URL}/matches/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(matchData),
  });
  return response.json();
};

// Create a new leaderboard entry (admin)
export const createLeaderBoardEntry = async (leaderboardData) => {
  const response = await fetch(`${BASE_URL}/leaderboard/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leaderboardData),
  });
  return response.json();
};
