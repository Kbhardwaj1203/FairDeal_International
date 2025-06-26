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
        <NavLink to="/">
          <img src={logo} alt="FairDeal Logo" className="logo-image" />
        </NavLink>
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
        <li><NavLink to="/about-us" className="nav-link" onClick={handleNavLinkClick}>About Us</NavLink></li>
        <li className="nav-divider" aria-hidden="true"></li>
        <li><NavLink to="/brands" className="nav-link" onClick={handleNavLinkClick}>Brands</NavLink></li>
        <li className="nav-divider" aria-hidden="true"></li>
        <li><NavLink to="/faq" className="nav-link" onClick={handleNavLinkClick}>FAQ</NavLink></li>
        <li className="nav-divider" aria-hidden="true"></li>
        <li><NavLink to="/contact-us" className="nav-link" onClick={handleNavLinkClick}>Contact Us</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
