import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
        <MainContent />
      )}
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  // List of routes where the Navbar should be hidden
  const hideNavbarRoutes = ["/signin", "/admin/create-match", "/admin/create-leaderboard"];

  // Hide Navbar if the current route matches any of the routes in hideNavbarRoutes
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Statusbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route element={<ProtectedRoute />}>
        <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/matches/:id" element={<MatchDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/create-match" element={<CreateMatch />} />
          <Route path="/admin/create-leaderboard" element={<CreateLeaderBoard />} />
        </Route>
      </Routes>
    </>
  );
}


export default App;



