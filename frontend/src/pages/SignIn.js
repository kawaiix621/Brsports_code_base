import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, db, ref, get, set } from "../firebase"; 
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithGoogle();
      const user = userCredential.user;
      const userId = user.email.split("@")[0];

      const userRef = ref(db, `users/${userId}`);

      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log("User exists. Redirecting...");
            navigate("/");
          } else {
            const newUser = {
              id: userId,
              username: user.displayName || userId,
              email: user.email,
              wins: 0,
              matchHistory: [],
              img: user.photoURL || "https://example.com/default-image.jpg",
              createdAt: new Date().toISOString(),
              gamesId: [],
            };
            set(userRef, newUser)
              .then(() => {
                console.log("User created successfully:", newUser);
                navigate("/");
              })
              .catch((error) => {
                console.error("Error creating user:", error.message);
              });
          }
        })
        .catch((error) => console.error("Error fetching user:", error.message));
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <div className="signin-container">
      <div className="pop">
        <div style={{ height: '70px' }}></div>
        <p className="pop-right">BRsports</p>
        <p className="games-list">
          BRsports is a gaming platform for mobile battle royale games, 
          helping hobbyist gamers become professional eSports players. 
          Players can compete daily, sharpen their skills, and earn real 
          cash prizes in a collaborative community environment.
        </p>

        <p className="pop-left">Daily Competitions</p>
        <p className="games-list">
          Participate in daily matches with cash prizes to stay motivated and 
          improve. Pay only ₦1,000 monthly, and winners receive ₦3,000 daily payouts. 
          Connect games like CODM, Warzone Mobile, Fortnite, and Bloodstrike 
          for easy integration.
        </p>

        <p className="pop-right">Community & Skill Development</p>
        <p className="games-list">
          Engage with other players in social spaces, chat rooms, and leaderboards. 
          Form teams, exchange strategies, and level up to professional-level competitions.
        </p>

        <p className="pop-left">Pathway to eSports Sponsorships</p>
        <p className="games-list">
          Build your professional portfolio through tracked stats and consistent wins. 
          Get noticed by sponsors, professional teams, or brands looking for endorsements.
        </p>
      </div>
     
      <div className="signin">
        <button type="button" onClick={handleGoogleSignIn}>
          Login :)
        </button>
      </div>

      <div style={{ height: '200px' }}></div>
    </div>
  );
};

export default SignIn;
