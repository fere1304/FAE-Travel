
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
  {
    label: "Alberta",
    alt: "Alberta2",
    url: "https://www.albertacentennial.ca/wp-content/uploads/2017/11/tourist-attractions-in-Alberta.jpg",
  },
  {
    label: "Thassos",
    alt: "Thassos2",
    url: "https://www.greeka.com/photos/eastern-aegean/thassos/sightseeing/hero/thassos-sightseeing-1280.jpg",
  },
  {
    label: "Roma",
    alt: "Roma2",
    url: "https://content.r9cdn.net/rimg/dimg/7f/2e/d82165ea-city-25465-16e7e859ccc.jpg?width=1366&height=768&xhint=1183&yhint=1022&crop=true",
  },
  {
    label: "Hurghada",
    alt: "Hurghada2",
    url: "https://thumbs.dreamstime.com/b/beach-red-sea-egyptian-hurghada-beach-red-sea-egyptian-hurghada-palm-trees-sand-red-sea-beautiful-summer-124563726.jpg",
  },
  {
    label: "Bali",
    alt: "Bali2",
    url: "https://whereismai.com/wp-content/uploads/2023/02/IMG_0057-scaled-e1677209214551.jpeg",
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