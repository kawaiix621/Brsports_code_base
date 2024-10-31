import React from "react";
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
      
      <div style={{ height: '200px' }}></div>
   
        <button type="button" onClick={handleGoogleSignIn}>
          Login :)
        </button>
        
      <div style={{ height: '200px' }}></div>
    </div>
  );
};

export default SignIn;
