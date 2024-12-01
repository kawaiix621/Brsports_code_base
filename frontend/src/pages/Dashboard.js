import React, { useEffect, useState } from "react";
import { db, ref, get } from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import MatchHistory from "../components/MatchHistory";


const CACHE_KEY = "cachedUserData";
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      setUser(JSON.parse(cachedData));
    }
    const userID = auth.currentUser?.email?.split('@')[0] || "user1"; // Use dynamic user ID
    const userRef = ref(db, `users/${userID}`);
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setUser(userData);
          localStorage.setItem(CACHE_KEY, JSON.stringify(userData));
        } else {
          console.log("User not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [auth]);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        setUser(null);
        localStorage.removeItem(CACHE_KEY);
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  if (!user) {
    return (
      <div className="dashboard">
       <p style={{
        marginTop:'100px'
       }}>Fetching userdata</p>
      </div>
    );
  }
  return (
    <div className="dashboard">
      <div style={{ height: "70px" }}></div>
      <img src={user.img} alt="User Avatar" />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h1><strong>{user.username || "Unknown User"}</strong></h1>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <p style={{
          margin: '0px'
        }}
        ><strong>Total Wins:</strong> {user.wins || 0}</p>
        <p style={{
          margin: '0px'
        }}
        ><strong>Wallet Balance:</strong> {user.wins || "57k"}</p>
      </div>
      <button>Deposit</button>
      <button>Withdraw</button>
      {/* Render MatchHistory and log match history */}
      {(() => {
        try {
          if (Array.isArray(user.matchHistory) && user.matchHistory.length > 0) {
            return <MatchHistory matches={user.matchHistory} />;
          } else {
            return <p>No match history available.</p>;
          }
        } catch (error) {
          console.error("Error rendering match history:", error);
          return <p>Unable to display match history.</p>;
        }
      })()}
      


        
      <img
      style={{
        position:"fixed",
        top:"35px",
        right:"10px",
        zIndex:"999"
      }}
      src="logout.svg" onClick={handleSignOut}/>
       


    </div>
  );
};
export default Dashboard;
