import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Home.css';
import WhyChooseUs from './WhyChooseUs';
import AboutUs from './AboutUs';
import Brands from './Brands';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const CAROUSEL_INTERVAL = 2500;

const Home = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, CAROUSEL_INTERVAL);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <>
      <div className="home-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`carousel ${idx + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
      <WhyChooseUs />
      <section id="aboutus">
        <AboutUs />
      </section>
      <section id="brands">
        <Brands />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contactus">
        <ContactUs />
      </section>
    </>
  );
};

export default Home; 
