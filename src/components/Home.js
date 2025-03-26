import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import homeVideo from '../assets/videos/homevideo.mp4';
import { ParallaxProvider } from 'react-scroll-parallax';

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <ParallaxProvider y={[-20, 20]}>
    <motion.section
      id="home"
      className="hero-section"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1, // Place behind content
        }}
      >
        <source src={homeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="display-4" style={{ fontWeight: 'bold', fontSize: '3.5rem' }}>
          Welcome to Sagar Exotic Escapes
        </h1>
        <p className="lead" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          Your one-stop solution for all travel needs.
        </p>
        {/* <motion.button
          className="btn btn-primary btn-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            backgroundColor: isDarkMode ? '#e7933f' : '#007BFF', // Dynamic button color
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1.25rem',
            borderRadius: '50px',
          }}
        >
          Explore Packages <FaArrowRight className="ml-2" />
        </motion.button> */}
      </motion.div>
    </motion.section>
    </ParallaxProvider>
  );
};

export default Home;
