import React from 'react';
import './Header.css'; 

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* <h1>Lines</h1> */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
