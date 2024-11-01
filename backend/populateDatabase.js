import React, { useState } from 'react';
import { createMatch } from '../api'; // Ensure you're importing the function correctly
import '../App.css';

const CreateMatch = () => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [details, setDetails] = useState('');
  const [about, setAbout] = useState('');
  const [rules, setRules] = useState('');
  const [prizePool, setPrizePool] = useState('');
  const [sponsors, setSponsors] = useState('');
  const [links, setLinks] = useState('');
  const [date, setDate] = useState('');
  const [roomID, setRoomID] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMatch({
        title,
        img: imageUrl,
        details,
        fullDetail: {
          about,
          rules: rules.split(',').map(rule => rule.trim()), // Split rules by commas
          prizePool
        },
        sponsors: sponsors.split(',').map(sponsor => sponsor.trim()), // Split sponsors by commas
        links: links.split(',').map(link => ({ name: link.trim(), url: link.trim() })), // Create objects from links
        date,
        roomID
      });
      alert('Match created successfully!');
      setTitle('');
      setImageUrl('');
      setDetails('');
      setAbout('');
      setRules('');
      setPrizePool('');
      setSponsors('');
      setLinks('');
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
        <div className='creatmatch'>
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
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Match details (short)"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="About the match (long)"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Match Rules (comma separated)"
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
            type="text"
            placeholder="Sponsors (comma separated)"
            value={sponsors}
            onChange={(e) => setSponsors(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Links (comma separated URLs)"
            value={links}
            onChange={(e) => setLinks(e.target.value)}
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
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit">Create Match</button>
        </div>
      </form>
    </div>
  );
};

export default CreateMatch;
