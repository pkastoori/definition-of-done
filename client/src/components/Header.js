import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h2 className="title">Definition of Done</h2>
      <p className="description">Lineup for code review process</p>
      <ul className="links">
        <Link to="/" className="link-items">
          About
        </Link>
        <Link to="/checklist" className="link-items">
          Checklist
        </Link>
        <Link to="/done" className="link-items">
          Done
        </Link>
      </ul>
    </div>
  );
}

export default Header;
