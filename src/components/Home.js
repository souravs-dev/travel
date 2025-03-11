// // Home.js
// import React from 'react';
// import { motion } from 'framer-motion';
// import beachImage from '../assets/images/beach.jpg';

// const Home = () => {

//   return (
//     <div className="home">
//     <motion.section
//       id="home"
//         className="hero-section"
//         style={{
//           backgroundImage: `url(${beachImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: 'white',
//           textAlign: 'center',
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       >
//         <motion.div
//           initial={{ x: -100 }}
//           animate={{ x: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <h1>Welcome to Sagar Exotic Escapes</h1>
//           <p>Your one-stop solution for all travel needs.</p>
//         </motion.div>
//       </motion.section>
//     </div>
//   );
// };

// export default Home;







import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import homeImage from '../assets/images/home.jpg'; // Light theme background
//import homeBgDark from '../assets/images/home-bg-dark.jpg'; // Dark theme background
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="hero-section"
      style={{
        //backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), url(${isDarkMode ? beachImage : beachImage}))`, // Dynamic background
        backgroundImage: `url(${homeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffc107',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
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
  );
};

export default Home;
