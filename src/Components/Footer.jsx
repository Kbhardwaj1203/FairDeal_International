import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaHome, FaInfoCircle, FaTags, FaQuestionCircle } from 'react-icons/fa';
import fairdealLogo from '../assets/fairdeal_logo.png';
import '../Styles/Footer.css';

const phone1 = '+919312234070';
const phone2 = '+919873730726';
const phone3 = '+918802233445';
const whatsapp = '+919312234070';

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-col footer-logo-col">
        <img src={fairdealLogo} alt="Fairdeal Logo" className="footer-logo" />
        <div className="footer-hours">
          <FaClock className="footer-icon" /> Business Hour:<br />
          10:00 AM - 06:00 PM Tues - Sat
        </div>
      </div>
      <div className="footer-col footer-links-col">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/"> <FaHome className="footer-link-icon" /> Home</a></li>
          <li><a href="/about-us"> <FaInfoCircle className="footer-link-icon" /> About Us</a></li>
          <li><a href="/brands"> <FaTags className="footer-link-icon" /> Brands</a></li>
          <li><a href="/faq"> <FaQuestionCircle className="footer-link-icon" /> FAQ</a></li>
          <li><a href="/contact-us"> <FaEnvelope className="footer-link-icon" /> Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-col footer-contact-col">
        <h3>Contact</h3>
        <div className="footer-contact-item">
          <FaMapMarkerAlt className="footer-icon" /> 9a, 1st floor, Furniture Block,<br />Kirti Nagar, New Delhi 110015
        </div>
        <div className="footer-contact-item">
          <FaEnvelope className="footer-icon" /> <a href="mailto:admin@fairdealinternational.org">admin@fairdealinternational.org</a><br />
          <a href="mailto:fairdealhouse@gmail.com">fairdealhouse@gmail.com</a>
        </div>
        <div className="footer-contact-item">
          <FaPhoneAlt className="footer-icon" /> <a href={`tel:${phone1}`}>{phone1.replace('+91', '(+91) ')}</a><br />
          <FaPhoneAlt className="footer-icon" /> <a href={`tel:${phone2}`}>{phone2.replace('+91', '(+91) ')}</a><br />
          <FaPhoneAlt className="footer-icon" /> <a href={`tel:${phone3}`}>{phone3.replace('+91', '(+91) ')}</a>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social facebook" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social instagram" aria-label="Instagram"><FaInstagram /></a>
          <a href={`https://wa.me/${whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="footer-social whatsapp" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href={`tel:${phone1}`} className="footer-social call" aria-label="Call"><FaPhoneAlt /></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Fairdeal International. All rights reserved.
    </div>
    {/* Floating WhatsApp and Call icons */}
    <a href={`https://wa.me/${whatsapp.replace('+', '')}`} className="floating-icon floating-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
    <a href={`tel:${phone1}`} className="floating-icon floating-call" aria-label="Call"><FaPhoneAlt /></a>
  </footer>
);

export default Footer; 