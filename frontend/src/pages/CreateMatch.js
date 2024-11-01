import React, { useState } from 'react';
import { db, ref, set } from '../firebase'; // Adjust this import path if necessary
import '../App.css';

const CreateMatch = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [roomID, setRoomID] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [shortDetails, setShortDetails] = useState('');
  const [longDetails, setLongDetails] = useState('');
  const [rules, setRules] = useState('');
  const [prizePool, setPrizePool] = useState('');
  const [sponsors, setSponsors] = useState('');
  const [links, setLinks] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a unique match ID (could use roomID or a timestamp)
    const matchID = `match_${Date.now()}`;

    // Define the match data structure
    const matchData = {
      title,
      date,
      roomID,
      imageURL,
      shortDetails,
      longDetails,
      rules,
      prizePool,
      sponsors,
      links,
    };

    try {
      // Send the data to Firebase
      await set(ref(db, `matches/${matchID}`), matchData);
      alert('Match created successfully!');
      
      // Clear input fields
      setTitle('');
      setDate('');
      setRoomID('');
      setImageURL('');
      setShortDetails('');
      setLongDetails('');
      setRules('');
      setPrizePool('');
      setSponsors('');
      setLinks('');
    } catch (err) {
      console.error('Failed to create match:', err);
      alert('Failed to create match');
    }
  };

  return (
    <div className="form-container">
      <h2>Create Match</h2>
      <form onSubmit={handleSubmit}>
        <div className="create-match">
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
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Match details (short)"
            value={shortDetails}
            onChange={(e) => setShortDetails(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="About the match (long)"
            value={longDetails}
            onChange={(e) => setLongDetails(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Match Rules"
            value={rules}
            onChange={(e) => setRules(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Prize pool"
            value={prizePool}
            onChange={(e) => setPrizePool(e.target.value)}
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
            value={sponsors}
            onChange={(e) => setSponsors(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Links"
            value={links}
            onChange={(e) => setLinks(e.target.value)}
            required
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit">Create Match</button>
        </div>
      </form>
    </div>
  );
};

export default CreateMatch;
