import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div style={{marginLeft:"30px"}} className="logo">
        <img style={{marginLeft:"30px"}}  src="https://www.godienergy.com/img/logo_dark.svg" alt="Logo" />
      </div>
      <div className="spacer"></div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>

      <a href="/">HOME</a>
      <a href="/about">ABOUT US</a>
      <a href="/materials">MATERIALS</a>
      <a href="/products">PRODUCTS</a>
      <a style={{marginRight:"60px"}} href="/hello">HELLO!</a>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
