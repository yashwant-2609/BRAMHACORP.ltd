import React from "react";
import "./HuesOfSky.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from "react-responsive-carousel";
import ContactForm from "../../Enquiry/Enquiry";
import Footer from "../../Footer/Footer";
import Description from "../../Description/Description";


const HuesOfSky = () => {
  return (
    <>
      <div className="image-container">
        <img
          src="/hues of sky.avif"
          alt="Building"
          className="background-image"
        />
        <div className="overlay-text">
          <img src="Hues text.avif" alt="" height="250px" width="250px"></img>
        </div>
      </div>

      <div className="resi">
        <a href="" style={{color: 'red'}}>Residential</a> / Hues of Sky
      </div>

      <div className="content">
        <span className="line" ></span>
        <h1>HUES OF SKY - WHERE LUXURY REACHES NEW HEIGHTS</h1>
        <p>
          Indulge in the epitome of opulence with our exclusive 2 and 3 BHK
          residences situated in the tallest 35-storey towers in Central Pune.
          Elevate your lifestyle with these luxury apartments boasting
          breathtaking cityscape views, meticulously crafted with impeccable
          elegance and thoughtful layouts.</p>
          <p> Discover the pinnacle of luxury
          living in Pune with our high-rise residential apartments, offering a
          choice of 2 BHK & 3 BHK apartments. Embark on a journey of luxury as
          you explore our apartments for sale, each meticulously designed to
          provide an unparalleled living experience.</p> 
          <p>Immerse yourself in a world
          of extravagance and enjoy top-of-the-line amenities such as an
          infinity swimming pool, a state-of-the-art fitness centre, a toddler
          play area, and a multi-purpose hall. Whether you are seeking 3 BHK
          apartments in Pune or eyeing ultra-luxury flats, our residences are
          designed to meet the highest standards of living.</p>
          <p><b> Ultra-Luxe
          Residences starting Rs. 1.50 Cr (All Inclusive)</b>
        </p>
      </div>
      
      <div>
        <button className="bt">Enter our 3D world</button>
      </div>

      <div className="show"><h1>SHOWCASE</h1></div>


      <div className="location"> <h1>LOCATION</h1></div>

      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7566.055813625542!2d73.876184!3d18.527641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e28f227645%3A0x769b8fc7fa7fd5fc!2sHues%20of%20Sky%20by%20BramhaCorp!5e0!3m2!1sen!2sin!4v1727213777491!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="pro"> <h1>PROXOMITIES</h1></div>
      <div className="content1">
    <p>
    Located in the heart of Pune - The most sought-after location, Hues of Sky offers a prime location for both business and leisure. Just 400 meters away from the Pune Zero Milestone and a stone's throw from the Pune Railway Station, it is in close proximity to luxury hotels like Sheraton Grand, renowned hospitals, and swanky malls. Hues of Sky is the perfect vantage point for all your needs, with easy access to everything you require right from your doorstep.
    </p>
    </div>

    <div className="pro"> <h1>AMENITIES</h1></div>

    <div className="pro"> <h1>SITE PROGRESS</h1></div>

    <div className="pro"> <h1>ENQUIRE NOW</h1></div>
    <div className="enq">
      <p>Its easy to get overwhelmed with the unique propositions of BramhaCorp.
      Let us help you in making up your mind.</p>
    </div>
    <ContactForm />
    <Description />
    <Footer />


    </>
  );
};

export default HuesOfSky;
