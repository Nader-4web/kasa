import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';
import logo from '../assets/logo.png';
import logomobile from '../assets/logomobile.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logonav">
        <picture>
          <source media="(max-width: 655px)" srcSet={logomobile} />
          <img src={logo} alt="logokasa" />
        </picture>
      </div>

      <div className="navlinks">
        <NavLink
          to="/"
          className={(activeLink) => (activeLink.isActive ? 'activeLink' : '')}
        >
          Accueil
        </NavLink>
      </div>
      <div className="navlinks">
        <NavLink
          to="/About"
          className={(activeLink) => (activeLink.isActive ? 'activeLink' : '')}
        >
          A propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
