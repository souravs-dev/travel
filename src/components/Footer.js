import React, { useContext } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer
      className="text-center p-4 mt-5"
      style={{ backgroundColor: isDarkMode ? '#1a1a1a' : '#f8f9fa', color: isDarkMode ? '#ffffff' : '#000000' }}
    >
      <div className="container">
        <div className="mb-3">
          <a href="https://facebook.com" className="mx-2" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="mx-2" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="mx-2" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="mx-2" style={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
            <FaLinkedin size={24} />
          </a>
        </div>
        <p>&copy; 2025 Sagar Exotic Escapes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;