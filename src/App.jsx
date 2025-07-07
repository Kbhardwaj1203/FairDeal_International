import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Brands from './Components/Brands';
import FAQ from './Components/FAQ';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    // Disable right-click
    // const handleContextMenu = (e) => e.preventDefault();
    // document.addEventListener('contextmenu', handleContextMenu);
    // // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    // const handleKeyDown = (e) => {
    //   if (
    //     e.key === 'F12' ||
    //     (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
    //     (e.ctrlKey && e.key === 'U')
    //   ) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     return false;
    //   }
    // };
    // document.addEventListener('keydown', handleKeyDown);
    // return () => {
    //   document.removeEventListener('contextmenu', handleContextMenu);
    //   document.removeEventListener('keydown', handleKeyDown);
    // };
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
