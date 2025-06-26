import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBed, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import '../Styles/Brands.css';
import brandBanner from '../assets/brand_banner.jpg';
import realComfortLogo from '../assets/brand1.jpg';
import drSpineLogo from '../assets/brand2.jpg';

const Brands = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="brands-container">
      <section className="brands-hero" style={{ backgroundImage: `url(${brandBanner})` }}>
        <div className="hero-overlay">
          <h1 data-aos="fade-down">Our Brands</h1>
          <p data-aos="fade-up">Quality & Comfort You Can Trust</p>
        </div>
      </section>

      <div className="brands-intro" data-aos="fade-up">
        <h2>Engineered for Excellence</h2>
        <p>We have meticulously developed two distinct brands to cater to the diverse needs of our customers, ensuring everyone finds their perfect sleep solution.</p>
      </div>

      <section className="brand-section" data-aos="fade-left">
        <div className="brand-image">
          <img src={realComfortLogo} alt="REAL COMFORT Logo" />
        </div>
        <div className="brand-content">
          <h2>REAL COMFORT</h2>
          <p>REAL COMFORT is designed for those who seek a luxurious and serene sleeping experience. These mattresses are crafted with premium materials to provide ultimate comfort and support, ensuring you wake up refreshed and rejuvenated every morning.</p>
          <div className="brand-features">
            <div className="feature">
              <FaBed className="feature-icon" />
              <span>Plush Comfort</span>
            </div>
            <div className="feature">
              <FaShieldAlt className="feature-icon" />
              <span>Durable Materials</span>
            </div>
            <div className="feature">
              <FaLeaf className="feature-icon" />
              <span>Eco-Friendly</span>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section reverse" data-aos="fade-right">
        <div className="brand-image">
          <img src={drSpineLogo} alt="DR. SPINE HEALTH Logo" />
        </div>
        <div className="brand-content">
          <h2>DR. SPINE HEALTH</h2>
          <p>DR. SPINE HEALTH is focused on providing orthopedic support without compromising on comfort. Developed with spinal health in mind, these mattresses help maintain correct posture during sleep, alleviating back pain and promoting overall wellness.</p>
          <div className="brand-features">
            <div className="feature">
              <FaBed className="feature-icon" />
              <span>Orthopedic Support</span>
            </div>
            <div className="feature">
              <FaShieldAlt className="feature-icon" />
              <span>Pressure Relief</span>
            </div>
            <div className="feature">
              <FaLeaf className="feature-icon" />
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;