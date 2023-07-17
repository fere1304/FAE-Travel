import React from 'react'
import {FaBars, FaTime} from 'react-icons/fa'
import logo from './images/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger">
          <FaBars></FaBars>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a className="coloritem" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="coloritem" href="/">
              Our Mission
            </a>
          </li>
          <li className="nav-item">
            <a className="coloritem" href="/">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="coloritem" href="/">
              Choose Your Destination
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar