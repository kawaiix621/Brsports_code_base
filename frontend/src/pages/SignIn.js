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
          <h4>One Daily Match:</h4> Test your skills against top players. </p>
          <p>

          <h4> Massive Winnings: 
          </h4>Win ₦3000 per victory! and Bigger Prize
           on sponsored matches
          </p>
          <p>
          <h4>Staking on live matches: </h4>
place a wager on yourself, your friend or favourite player in real time
during matches for higher returns </p>
        </p> {/* Your about us text here */}

       <div className="signin">
       
       <h4
       style={{
        color:"rgba(0,0,0,0.7)",
        textAlign:"center",
        marginTop:"50px"
       }}>Login now and continue your winning streak! </h4>
        
        <button style={{
          opacity:"1"
        }} type="button" onClick={() => handleSignIn(signInWithGoogle)}>
       Gamer's portal
        </button>
      {/*  <button  style={{
          opacity:"1"
        }} type="button" onClick={() => handleSignIn(signInWithTwitter)}>
        Login with X
        </button> */}
</div>



<div style={{
  display:"flex",
  flexWrap:"wrap",
  justifyContent:"center",
  marginTop:"30px",
  marginBottom:"30px"
}}>
<img className="gamesimg" src="codm.png"></img>
<img className="gamesimg" src="freefire.png"></img>
<img className="gamesimg" src="pubg.png"></img>
<img className="gamesimg" src="farlight.png"></img>
<img className="gamesimg" src="bloodstrike.png"></img>

</div>


<h2>Escape the Grind:  BRsports</h2>
<p>
  No more feeling like a loser after hours of gaming. BRsports provides a structured environment for competitive play with guaranteed opportunities to earn.  We offer daily matches and substantial winnings, ensuring that your time and effort translate into real rewards.  It's time to make your passion pay off.
</p>


</div>

{/*Your Mission text */}

<div style={{ height: '100px', display:'flex'
}}>
    <a href="your_x_page_url" target="_blank" rel="noopener noreferrer">
    <img style={{
  width:"40px",
  height:"40px",
  opacity:"0.5",
  margin:"5px",
  marginRight:"10px"
}} src="x.png"></img>
    </a>

    <a href="your_youtube_page_url" target="_blank" rel="noopener noreferrer">  
<img style={{
  width:"50px",
  height:"50px",
  opacity:"0.5",
  margin:"0px",
  marginLeft:"5px"
}} 
src="youtube.png"></img>
</a>

</div>
</div>
  );
};

export default SignIn;