import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signInWithTwitter, db, ref, get, set } from "../firebase"; 


const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = async (signInMethod) => {
    try {
      const userCredential = await signInMethod();
      const user = userCredential.user;
      const userId = user.email ? user.email.split("@")[0] : user.uid; // Fallback to UID if no email

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
              email: user.email || "N/A",
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
      console.error("Sign-In Error:", error.message);
    }
  };

  return (
<div className="signin-container">
<div style={{ height: '70px' }}></div>


<div className="header"> {/*Use className for styling*/}
        <h1 className="title">Welcome to BRsports</h1>
        <p className="subtitle">Play daily, win big. 
          Join BRsports, the mobile battle 
          royale platform where skill pays off.</p>
      </div>


      <img style={{
  width:"100vw",
  height:"auto",
  borderRadius:"0px"
}}
src="banner.png">
</img>

      <div className="about"> {/*Section for About Us*/}
        <h2>Dominate the Battle Royale & Earn Big.</h2>
        <p>
        Tired of free-to-play frustration? At BRsports, you get to compete daily in high-stakes matches. For a monthly fee of just  ₦1000, you'll receive: 
        
        <p>
          One Daily Match: Test your skills against top players. </p>
          <p>

          Massive Winnings: Win $3000 per victory!
          </p>
          <p>
Fair Ranking System: Climb the leaderboard and prove your dominance.
          </p>
        </p> {/* Your about us text here */}

       <div className="signin">
       <h2>Sign up now and start your winning streak! </h2>
        <button style={{
          opacity:"1"
        }} type="button" onClick={() => handleSignIn(signInWithGoogle)}>
        Gamer's Portal
        </button>
      {/*  <button  style={{
          opacity:"1"
        }} type="button" onClick={() => handleSignIn(signInWithTwitter)}>
        Login with X
        </button> */}
</div>

<h2>Escape the Grind:  BRsports</h2>
<p>
  No more feeling like a loser after hours of gaming. BRsports provides a structured environment for competitive play with guaranteed opportunities to earn.  We offer daily matches and substantial winnings, ensuring that your time and effort translate into real rewards.  It's time to make your passion pay off.
</p>


</div>

{/*Your Mission text */}

<div style={{ height: '100px' }}></div>
</div>
  );
};

export default SignIn;