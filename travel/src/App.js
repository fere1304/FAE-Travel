import React from 'react'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact';
import Mission from './Components/Mission';
import AboutUs from './Components/AboutUs';
import Destinations from './Components/Destinations';
import Footer from './Components/Footer';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Contact></Contact>
      <Mission></Mission>
      <AboutUs></AboutUs>
      <Destinations></Destinations>
      <Footer></Footer>
    </div>
  );
}

export default App;
