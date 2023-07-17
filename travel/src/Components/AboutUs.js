import React from 'react'
import './AboutUs.css'
import adi from './images/adi.jpeg'
import edi from "./images/edi.jpeg";
import fere from "./images/fere.jpeg";

const AboutUs = () => {
  return (
    <div className="about" id='about'>
      <div className="container">
        <h2>About Us</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={adi} alt="adi" />
            <p>ceva</p>
            <p>
              <span>Adriana Calin</span>
            </p>
            <p>Director of FAE Travel</p>
          </div>
          <div className="card">
            <img src={edi} alt="edi" />
            <p>ceva2</p>
            <p>
              <span>Eduard Ochiana</span>
            </p>
            <p>Director of FAE Travel</p>
          </div>
          <div className="card">
            <img src={fere} alt="fere" />
            <p>ceva3</p>
            <p>
              <span>Teodor Ferendino</span>
            </p>
            <p>Director of FAE Travel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs