
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Mission.css"

const imageData = [
  {
    label: "Roma",
    alt: "Roma",
    url: "https://media.cnn.com/api/v1/images/stellar/prod/180718155455-roma-paisaje.jpg?q=x_411,y_0,h_1667,w_1667,c_crop",
  },
  {
    label: "Thassos",
    alt: "Thassos",
    url: "https://www.discovergreece.com/sites/default/files/styles/hd_half/public/2022-09/Marble%20beach%2C%20Thassos.jpg?itok=NIMLWokp",
  },
  {
    label: "Alberta",
    alt: "Alberta",
    url: "https://roadtripalberta.com/wp-content/uploads/2020/06/Alberta-Cool-Trips-Feature.jpg",
  },
  {
    label: "Hurghada",
    alt: "Hurghada",
    url: "https://i.pinimg.com/564x/ab/a1/c0/aba1c0ab4baa9df9b73f3f62a7b0f865.jpg",
  },
  {
    label: "Bali",
    alt: "Bali",
    url: "https://www.traveloffpath.com/wp-content/uploads/2022/06/traveler-Bali.jpg",
  },
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} className="imgtr" />
    <p className="legend">{image.label}</p>
  </div>
));

const Mission = () => {
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
      setCurrentIndex(index);
    }
  return (
    <div className="mission" id="mission">
      <div className="container">
        <h2>Our Mission</h2>
        <span className="line"></span>
       
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
                  selectedItem={imageData[currentIndex]}
                  showThumbs={false}
            onChange={handleChange}
            className="carousel-container"
          >
            {renderSlides}
          </Carousel>
        
      </div>
    </div>
  );
}

export default Mission