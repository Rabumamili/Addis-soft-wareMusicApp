import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListSongs from "./components/ListSongs";
import ShowSongStats from "./components/SongStats/ShowSongStats";
import WelcomingPage from "./components/WelcomingPage"; // Import the WelcomingPage component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const handleGetStarted = () => {
    // Redirect to the ListSongs component after clicking 'GET STARTED'
    window.location.href = "/songs"; // Change the route to the main application
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomingPage onGetStarted={handleGetStarted} />} />
        <Route path="/songs" element={<ListSongs />} /> {/* Updated path */}
        <Route path="/song-stats" element={<ShowSongStats />} />
      </Routes>
      <ToastContainer theme="dark"/>
    </BrowserRouter>
  );
};

export default App;
