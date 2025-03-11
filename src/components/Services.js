import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FaPlane, FaHotel, FaCar, FaUmbrellaBeach, FaShieldAlt, FaPassport, FaIdCard } from 'react-icons/fa';

const Services = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const services = [
    { icon: <FaPlane size={50} />, title: 'Flight Booking', description: 'Book flights to your dream destinations.' },
    { icon: <FaHotel size={50} />, title: 'Hotel Reservations', description: 'Find the best hotels at affordable prices.' },
    { icon: <FaCar size={50} />, title: 'Car Rentals', description: 'Rent cars for convenient travel.' },
    { icon: <FaUmbrellaBeach size={50} />, title: 'Tour Packages', description: 'Explore curated tour packages.' },
    { icon: <FaShieldAlt size={50} />, title: 'Travel Insurance', description: 'Stay protected with travel insurance.' },
    { icon: <FaPassport size={50} />, title: 'Passport & Visa', description: 'Assistance with passport and visa applications.' },
    { icon: <FaIdCard size={50} />, title: 'PAN Card Services', description: 'Get help with PAN card applications and updates.' },
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
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="container mt-5 py-5"
    >
      <h1 className="text-center mb-5">Our Services</h1>
      <div className="row">
        {services.map((service, index) => (
          <motion.div
            className="col-md-4 mb-4"
            key={index}
            variants={childVariants}
          >
            <motion.div
              className="card h-100 text-center p-4 shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-body">
                <div className="icon mb-3">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text">{service.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;