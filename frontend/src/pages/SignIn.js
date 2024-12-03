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

<img style={{
  width:"100vw",
  height:"auto",
  borderRadius:"0px"
}}
src="banner.png">
</img>

<div className="header"> {/*Use className for styling*/}
        <h1 className="title">Welcome to BRsports</h1>
        <p className="subtitle">The most acessible Esport Platform</p>
      </div>

      <div className="about"> {/*Section for About Us*/}
        <h2>A new way to Play Your Games</h2>
        <p>
        Esports.gg was launched by a diverse group of esports
         industry veterans to finally give esports, competitive 
         gaming and streaming the dedicated home it deserves. With 
         contributions from peak-of-form professional athletes, singular 
         </p> {/* Your about us text here */}

        <h2>A fair Ranking System</h2>
        <p>Esports.gg is a destination connecting 
          esports fans to their passions. We create 
          news and analysis for all gamers, esports 
</p> {/*Your Mission text */}


<h2>Understand BRsports</h2>
        <p> 
          Monad Labs is building the next-generation b
          lockchain infrastructure for Monad,
           a 100% EVM-compatible layer 1 blockchain boasting
            10,000 transactions per second, 1-second block times, 
            single-slot finality, and low-hardware requirements.
</p> {/*Your Mission text */}
</div>
<div className="signin">
        <button style={{
          opacity:"1"
        }} type="button" onClick={() => handleSignIn(signInWithGoogle)}>
        Gammer's Portal
        </button>
      {/*  <button  style={{
          opacity:"1"
        }} type="button" onClick={() => handleSignIn(signInWithTwitter)}>
        Login with X
        </button> */}
</div>

{/*Your Mission text */}

<div style={{ height: '100px' }}></div>
</div>
  );
};

export default SignIn;