import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h3>
        <Link className="header-link" to="/">
          Home
        </Link>
      </h3>
      <h3>
        <Link className="header-link" to="/aboutme">
          About Me
        </Link>
      </h3>
      <h3>
        <Link className="header-link" to="/projects">
          My Projects
        </Link>
      </h3>
    </div>
  );
};

export default Header;
