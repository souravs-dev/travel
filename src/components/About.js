import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/images/about.jpg'; // Import the image

const About = () => {

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="container mt-5 py-5"
    >
      <h1 className="text-center mb-5">About Us</h1>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={aboutImage}
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Our Story</h2>
          <p className="lead">
            At Travel Services, we believe that every journey should be unforgettable. With over 10 years of experience in the travel industry, we are dedicated to providing exceptional travel experiences tailored to your needs.
          </p>
          <p>
            Whether you're planning a relaxing beach vacation, an adventurous mountain trek, or a cultural city tour, we have the perfect package for you. Our team of experts works tirelessly to ensure that every detail of your trip is taken care of, so you can focus on making memories.
          </p>
          <p>
            We pride ourselves on our commitment to customer satisfaction, offering 24/7 support and personalized service. Let us help you discover the world, one destination at a time.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;