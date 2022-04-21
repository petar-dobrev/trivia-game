import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import MainMenu from "./pages/main-menu/MainMenu";
import Play from "./pages/play/Play";
import Profile from "./pages/profile/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/play" element={<Play />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/users/:userId" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
