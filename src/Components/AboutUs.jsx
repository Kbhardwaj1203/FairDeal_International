import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBuilding, FaBullseye, FaUsers, FaHeartbeat, FaCogs, FaHandsHelping } from 'react-icons/fa';
import '../Styles/AboutUs.css';
import aboutUsImage from '../assets/img5.jpg'; 

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="about-us-container">
      <section className="about-hero" style={{ backgroundImage: `url(${aboutUsImage})` }}>
        <div className="hero-overlay">
          <h1 data-aos="fade-down">About Fairdeal International</h1>
          <p data-aos="fade-up">Your Comfort, Our Commitment</p>
        </div>
      </section>

      <section className="about-section" data-aos="fade-up">
        <div className="about-content">
          <div className="about-icon"><FaBuilding /></div>
          <h2>Our History &amp; Vision</h2>
          <p>Fairdeal International is the brainchild of Mr. B. S. Rohilla, who envisioned becoming an ace contributor in the daily life comfort and wellbeing of his customers. After graduating from Delhi University in 1980, Mr. Rohilla contributed 13 years of his dedicated services to a leading & reputed mattress manufacturing company (from 1986 to 1999).</p>
          <p>Fairdeal International, an ISO 9001: 2008 certified company, was incepted with the clear idea of introducing an extensive range of quality-based and comfy mattresses, which can match the expectation standards of modern-age customers. Our motive is to manufacture and supply mattresses which not only add to your sleep comfort but enhance your home's interior & luxury value too.</p>
        </div>
      </section>

      <section className="about-section alternate-bg" data-aos="fade-up">
        <div className="about-content">
            <div className="about-icon"><FaBullseye /></div>
            <h2>Our Mission &amp; Growth</h2>
            <p>Presently under the eminent leadership of Shubham Rohilla, son of Mr. B. S. Rohilla, the company is performing wonderfully in its targeted domain. With its customer-oriented product and pricing strategy, the company has attained a steep growth pace within a short span of its establishment. We aim to sustain this pace and serve our customers with world-class products, which help them to enjoy a sound sleep and wake up healthy every morning.</p>
        </div>
      </section>

      <section className="about-section" data-aos="fade-up">
        <div className="about-content">
          <div className="about-icon"><FaHeartbeat /></div>
          <h2>Our Brands: Comfort &amp; Health</h2>
          <p>Focusing on the role of mattresses in the daily life health of individuals, we have established two mattress brands—<strong>REAL COMFORT</strong> and <strong>DR. SPINE HEALTH</strong>, concentrating respectively on comfy sleep and a healthy spine in the human body.</p>
        </div>
      </section>
      
      <section className="about-section alternate-bg" data-aos="fade-up">
        <div className="about-content">
            <div className="about-icon"><FaCogs /></div>
            <h2>Manufacturing Excellence</h2>
            <p>To match the challenges of extensive production, we have established state-of-art manufacturing facilities, empowering our units to produce a massive range of quality-based mattresses. We bring advanced manufacturing technologies on a continuous basis to upgrade the standards of our products. Usage of global-scale techniques and advanced ideas has emerged as our USP in Indian markets.</p>
        </div>
      </section>

      <section className="about-section" data-aos="fade-up">
        <div className="about-content">
          <div className="about-icon"><FaUsers /></div>
          <h2>Our Professional Team</h2>
          <p>The company is established and run by professionals with over 23 years of experience in the trade, which adds up to the smooth functioning of our solutions. In order to provide timed shipment of quality-based products, we have appointed a huge team of intelligent, skilled, and enthusiastic professionals. Our workforce is our backbone, which works honestly towards achieving complete client satisfaction.</p>
        </div>
      </section>

      <section className="about-section alternate-bg" data-aos="fade-up">
        <div className="about-content">
            <div className="about-icon"><FaHandsHelping /></div>
            <h2>Our Commitment to You</h2>
            <p>Promising the best of quality and commitment towards reasonable prices, we always focus on innovation. Novelty in design and invention in comfort levels are inherent characteristics of our products. Our post-sales assistance team is eager to serve customers and take their feedback. We believe that our relationship with a customer doesn't end after selling a product; it actually begins.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
