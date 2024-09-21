// Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo">FOODI</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#offers">Offers</a></li>
        </ul>
      </nav>
      <button className="cta">Contact</button>
    </header>
  );
}

export default Header;