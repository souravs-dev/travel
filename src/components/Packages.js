import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import mountainImage from '../assets/images/mountain.jpg';
import cityImage from '../assets/images/city.jpg';
import hotelImage from '../assets/images/hotel.jpg';
import beachImage from '../assets/images/beach.jpg';
import eiffelImage from '../assets/images/eiffel.jpg';
import tokyoImage from '../assets/images/tokyo.jpg';
import packagesVideo from '../assets/videos/packagesVideo.mp4';

const Packages = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const packages = [
    {
      category: 'Domestic',
      items: [
        { image: mountainImage, title: 'Mountain Getaway', price: '₹4999', description: 'Explore the serene mountains with our 3-day package.' },
        { image: cityImage, title: 'City Explorer', price: '₹5999', description: 'Discover the vibrant city life with our 4-day package.' },
        { image: beachImage, title: 'Beach Vacation', price: '₹6999', description: 'Relax on pristine beaches with our 5-day package.' },
      ],
    },
    {
      category: 'International',
      items: [
        { image: eiffelImage, title: 'Paris Adventure', price: '₹12999', description: 'Experience the romance of Paris with our 7-day package.' },
        { image: tokyoImage, title: 'Tokyo Discovery', price: '₹13999', description: 'Explore the vibrant culture of Tokyo with our 7-day package.' },
        { image: hotelImage, title: 'Luxury Stay in Dubai', price: '₹14999', description: 'Indulge in luxury with our 7-day Dubai package.' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="packages"
      style={{
        position: 'relative',
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src={packagesVideo} type="video/mp4" />
      </video>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        transition={{ duration: 1 }}
        className="container mt-5 py-5"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
      <h1 className="text-center mb-5">Our Packages</h1>
      {packages.map((pkg, index) => (
        <div key={index} className="mb-5">
          <h2 className="text-center mb-4">{pkg.category} Packages</h2>
          <div className="row">
            {pkg.items.map((item, idx) => (
              <motion.div
                className="col-md-4 mb-4"
                key={idx}
                variants={childVariants}
              >
                <motion.div
                  className="card h-100 text-center shadow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={item.image} className="card-img-top" alt={item.title} />
                  <div className="card-body text-center">
                    <h3 className="card-title">{item.title}</h3>
                    <h4 className="text-primary">{item.price}</h4>
                    <p className="card-text">{item.description}</p>
                    {/* <button className="btn btn-primary">Enquire Us</button> */}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
      </motion.div>
    </motion.section>
  );
};

export default Packages;