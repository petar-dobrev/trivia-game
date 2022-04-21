import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./mainMenu.css";

function MainMenu() {
  const loggedIn = true; // Placeholder until state contex is added

  const buttons = loggedIn ? (
    <>
      <Link to="/play">
        <Button className="mainMenuButton" variant="contained" size="large" fullWidth={true}>
          Play Game
        </Button>
      </Link>
      <Link to="/users/:userId">
        <Button className="mainMenuButton" variant="contained" size="large" fullWidth={true}>
          View Profile
        </Button>
      </Link>
      <Link to="/leaderboard">
        <Button className="mainMenuButton" variant="contained" size="large" fullWidth={true}>
          View Leaderboard
        </Button>
      </Link>
      <Button className="mainMenuButton" variant="contained" size="large" fullWidth={true}>
        Log out
      </Button>
    </>
  ) : (
    <>
      <Button className="mainMenuButton" variant="contained" size="large" fullWidth={true}>
        Log in / Register
      </Button>
      <Link to="/leaderboard">
        <Button className="mainMenuButton" variant="contained" size="large" fullWidth={true}>
          View Leaderboard
        </Button>
      </Link>
    </>
  );

  return (
    <div className="mainMenuContainer">
      <Container maxWidth="sm">{buttons}</Container>
    </div>
  );
}

export default MainMenu;
