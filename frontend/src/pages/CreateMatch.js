import React, { useState } from 'react';
import { createMatch } from '../api'; // Ensure you're importing the function correctly
import '../App.css';

const CreateMatch = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [roomID, setRoomID] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMatch({ title, date, roomID });
      alert('Match created successfully!');
      setTitle('');
      setDate('');
      setRoomID('');
    } catch (err) {
      console.error(err);
      alert('Failed to create match');
    }
  };
  return (
    <div className="form-container">
      <h2>Create Match</h2>
      <form onSubmit={handleSubmit}>

       <div className='creatmatch'
        >

<input
          type="text"
          placeholder="Match Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

<input
          type="text"
          placeholder="Match details (short)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="About the match (long)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

<input
          type="text"
          placeholder="Match Rules"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

<input
          type="text"
          placeholder="Prize pool"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Room ID"
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
          required
        />

<input
          type="text"
          placeholder="Sponsors"
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
          required
        />
        
<input
          type="text"
          placeholder="links"
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
          required
        />



        </div>

<div style={{
  textAlign:'center'
}}>
<button type="submit">Create Match</button>
</div>


       </form>
    </div>
  );
};
export default CreateMatch;





/*
match2: {
  id: "match2",
  title: "CODM Team Deathmatch",
  status: "daily",
  participants: ["user2", "user3"],
  roomID: "",
  date: "2024-10-25",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnyiZP2H3Ba74yx5w77H3q82_pGYsFwdsxQ&s",
  timestamp: "2024-10-25T12:20:00Z", // Day after tomorrow
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

*/