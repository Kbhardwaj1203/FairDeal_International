import React from 'react';
import '../Styles/WhyChooseUs.css';
import { FaCheckCircle, FaGlobe, FaHeart } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <h2 className="section-title" data-aos="fade-down">Why Choose Us?</h2>
      <div className="features-container">
        <div className="feature-item" data-aos="fade-up">
          <FaCheckCircle className="feature-icon1" />
          <h3 className="feature-title">Quality Assurance</h3>
          <p className="feature-description">
            We are committed to providing the highest quality products, meticulously sourced and inspected to meet rigorous standards.
          </p>
        </div>
        <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
          <FaGlobe className="feature-icon1" />
          <h3 className="feature-title">Global Network</h3>
          <p className="feature-description">
            Our extensive global network allows us to source the best products at competitive prices from around the world.
          </p>
        </div>
        <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
          <FaHeart className="feature-icon1" />
          <h3 className="feature-title">Customer Satisfaction</h3>
          <p className="feature-description">
            Your satisfaction is our priority. We are dedicated to providing excellent service and building long-lasting partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 