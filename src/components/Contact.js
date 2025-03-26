import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import emailjs from 'emailjs-com';
import contactVideo from '../assets/videos/contactVideo.mp4';
import logo from '../assets/images/logo1.JPG';

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    // Replace these with your EmailJS credentials
    const serviceID = 'service_mebjpib';
    const templateID = 'template_kj62zsd';
    const userID = 'QOwhIGtxFfW89dnH_';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          setIsSuccess(true);
          let timeout = setTimeout(() => setIsSuccess(false), 10000);
          setFormData({ name: '', email: '', number: '', message: '' });
        },
        (error) => {
          console.error('Failed to send email:', error);
          setIsError(true);
          let timeout = setTimeout(() => setIsError(false), 10000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.section
      id="contact"
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
        <source src={contactVideo} type="video/mp4" />
      </video>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="container mt-5 py-5"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >
      <h1 className="text-center mb-5">Contact Us</h1>
      <div className="row">
        <div className="col-md-6" >
        <img
            src={logo}
            alt="Company Logo"
            style={{
              height: "80px",
              marginRight: "10px",
            }}
          />
          <h2 className="mb-4">Get in Touch</h2>
          <p className="lead">
            Have questions or need assistance? We're here to help! Reach out to us via phone, email, or visit our office.
          </p>
          <div className="mb-4">
            <h4>Office Address</h4>
            <p>
              38, 7th Cross Rd,<br />
              Krishnappa Block, Ganganagar,<br />
              Bengaluru, Karnataka 560032
            </p>
          </div>
          <div className="mb-4">
            <h4>Contact Information</h4>
            <p>
              <strong>Phone:</strong> +91 78296 50002<br />
              <strong>Email:</strong> sagarexoticescapes@gmail.com
            </p>
          </div>
          <div className="mb-4">
            <h4>Business Hours</h4>
            <p>
              <strong>Mon-Fri:</strong> 9:00 AM - 6:00 PM<br />
              <strong>Sat-Sun:</strong> Closed
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="number" className="form-label">Contact number</label>
              <input
                type="tel"
                className="form-control"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter your contact number"
                required
                maxLength={"10"}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {isSuccess && (
              <div className="alert alert-success mt-3">
                Message sent successfully!
              </div>
            )}
            {isError && (
              <div className="alert alert-danger mt-3">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="mb-4">Our Location</h2>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2506504605067!2d77.58821747592462!3d13.019704013820101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b133afbd73%3A0x107fc3c9c39ddd6!2sSagar%20Exotic%20Escapes!5e0!3m2!1sen!2sin!4v1734450406731!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;