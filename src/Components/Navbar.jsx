import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';
import logo from '../assets/fairdeal_logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          <img src={logo} alt="FairDeal Logo" className="logo-image" />
        </a>
      </div>
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={handleHamburgerClick}
        role="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </div>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#aboutus" className="nav-link" onClick={handleNavLinkClick}>About Us</a></li>
        <li className="nav-divider" aria-hidden="true"></li>
        <li><a href="#brands" className="nav-link" onClick={handleNavLinkClick}>Brands</a></li>
        <li className="nav-divider" aria-hidden="true"></li>
        <li><a href="#faq" className="nav-link" onClick={handleNavLinkClick}>FAQ</a></li>
        <li className="nav-divider" aria-hidden="true"></li>
        <li><a href="#contactus" className="nav-link" onClick={handleNavLinkClick}>Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
