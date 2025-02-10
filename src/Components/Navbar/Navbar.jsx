import React from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="logo">Vedant's Website</div>
      <ul>
        <li><button onClick={() => setCurrentPage("home")}>Home</button></li>
        <li><button onClick={() => setCurrentPage("about")}>About</button></li>
        <li><button onClick={() => setCurrentPage("gallery")}>Gallery</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;