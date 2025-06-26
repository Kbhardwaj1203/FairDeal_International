import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaUserTie, FaClock } from 'react-icons/fa';
import '../Styles/ContactUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="contact-container">
      <h1 className="contact-title" data-aos="fade-down">Contact Us</h1>
      <p className="contact-subtitle" data-aos="fade-up">If you have a question or comment, please contact us using the information below. And be sure to check the FAQ's - you may find just the answer you're looking for.</p>
      <div className="contact-grid">
        <div className="contact-card" data-aos="fade-up" data-aos-delay="0">
          <FaUserTie className="contact-icon" />
          <h2>Write</h2>
          <p className="contact-label">President</p>
          <p>Fairdeal International India</p>
          <p>9a, 1st floor, Furniture Block,<br />Kirti Nagar, New Delhi 110015</p>
        </div>
        <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
          <FaEnvelope className="contact-icon" />
          <h2>Email</h2>
          <a href="mailto:admin@fairdealinternational.org">admin@fairdealinternational.org</a><br />
          <a href="mailto:fairdealhouse@gmail.com">fairdealhouse@gmail.com</a>
        </div>
        <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
          <FaPhoneAlt className="contact-icon" />
          <h2>Call</h2>
          <a href="tel:+919312234070">(+91) 9312234070</a><br />
          <a href="tel:+919873730726">(+91) 9873730726</a><br />
          <a href="tel:+918802233445">(+91) 8802233445</a>
          <p className="contact-label"><FaClock className="inline-icon" /> Business Hour: 10:00 AM - 06:00 PM Tues - Sat</p>
        </div>
      </div>
      <div className="contact-map-section" data-aos="fade-up" data-aos-delay="300">
        <h2>Our Location</h2>
        <div className="contact-map-wrapper">
          <iframe
            title="Fairdeal International Location"
            src="https://www.google.com/maps?q=9a,+1st+floor,+Furniture+Block,+Kirti+Nagar,+New+Delhi+110015&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 