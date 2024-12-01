import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signInWithTwitter, db, ref, get, set } from "../firebase"; 
import "./SignIn.css";

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
<div style={{ height: '100px' }}></div>
<h1 style={{
  fontSize:"80px",
  margin:"0px",
  fontWeight:"normal",
  fontFamily:"Bagel"
}}>
BRsports
</h1>
<p style={{
  color:"rgba(250,250,250,0.7)",
  fontSize:"20px",
  margin:"4px"
}}>We don't match couples we match rivals</p>







<div className="signin">
        <button type="button" onClick={() => handleSignIn(signInWithGoogle)}>
        Signup
        </button>
        <button type="button" onClick={() => handleSignIn(signInWithTwitter)}>
        Login
        </button>
      </div>
<div style={{ height: '400px' }}></div>
</div>
  );
};

export default SignIn;