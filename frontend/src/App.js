// src/App.js let have it 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import ProtectedRoute from './components/ProtectedRoute';
import MatchDetails from './pages/MatchDetails';
import Dashboard from './pages/Dashboard';
import LeaderBoard from './pages/LeaderBoard';
import CreateMatch from './pages/CreateMatch';
import CreateLeaderBoard from './pages/CreateLeaderBoard';
import Navbar from './components/Navbar';
import Statusbar from './components/Statusbar';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <Router>
      {showSplash ? (
        <Splash />
      ) : (
        <>
        <Navbar />
          <Statusbar />
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/matches/:id" element={<MatchDetails />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
              <Route path="/admin/create-match" element={<CreateMatch />} />
              <Route path="/admin/create-leaderboard" element={<CreateLeaderBoard />} />
            </Route>
            
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
