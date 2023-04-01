import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const Menu = () => {
    return (
      <>
        <p className={isActive("/")}>
          <Link to="/">Home</Link>
        </p>
        <p className={isActive("/whoWeAre")}>
          <Link to="/whoWeAre">Who I'm ?</Link>
        </p>
        <p className={isActive("/possibility")}>
          <Link to="/possibility">Skills</Link>
        </p>
        <p className={isActive("/features")}>
          <Link to="/features">Goals</Link>
        </p>
        <p className={isActive("/blog")}>
          <Link to="/blog">My Work</Link>
        </p>
      </>
    );
  };
  return (
    <div className="AS__navbar">
      <div className="AS__navbar-links">
        <div className="AS__navbar-links_container">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
