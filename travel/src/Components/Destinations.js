import React from 'react'
import "./Destinations.css"
import roma from "./images/Roma.jpg"
import bali from "./images/bali.jpg"
import hugharda from "./images/Hurghada.jpeg"
import alberta from "./images/alberta.jpg"
import thassos from "./images/thassos.jpg"

function Destinations() {
  return (
    <div className="destinations" id='destinations'>
      <div className="container">
        <h2>Choose Your Destination</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card-div">
             <img src={roma} alt="roma" className="card" />
            <p>Roma, Italy</p>
          </div>
          <div className="card-div">
            <img src={thassos} alt="roma" className="card" />
            <p>Thassos, Greece</p>
          </div>
          <div className="card-div">
            <img src={alberta} alt="roma" className="card" />
            <p>Alberta, Canada</p>
          </div>
          <div className="card-div">
            <img src={bali} alt="roma" className="card" />
            <p>Bali, Indonesia</p>
          </div>
          <div className="card-div">
            <img src={hugharda} alt="roma" className="card" />
            <p>Hurghada, Egypt</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations