import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">Our Mission</a>
          </li>
          <li className="nav-item">
            <a href="/">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/">Choose Your Destination</a>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>Copyright © 2023 FAE Travel, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer