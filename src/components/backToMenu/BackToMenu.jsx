import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import "./backToMenu.css";

function BackToMenu() {
  return (
    <div className="iconContainer">
      <Link to="/">
        <IconButton size="large" aria-label="back to menu">
          <ArrowCircleLeftIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default BackToMenu;
