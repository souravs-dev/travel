import React, { useContext } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ThemeContext } from '../context/ThemeContext';
import logo from '../assets/images/logo.jpg';

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo Column */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <img 
              src={logo} 
              alt="Travel Services Logo" 
              style={{ 
                height: '150px',
              }} 
            />
            <p className="text-muted small">Escape into luxury</p>
          </div>

          {/* Social Icons Column */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-3">
              <a href="https://facebook.com" className="text-white"><FaFacebook size={20} /></a>
              <a href="https://twitter.com" className="text-white"><FaXTwitter size={20} /></a>
              <a href="https://instagram.com" className="text-white"><FaInstagram size={20} /></a>
              <a href="https://linkedin.com" className="text-white"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Copyright Column */}
          <div className="col-md-4 text-center text-md-end">
            <p className="m-0">&copy; {new Date().getFullYear()} Sagar Exotic Escapes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;