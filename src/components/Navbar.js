import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logo from '../assets/images/logo1.JPG';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="Company Logo"
            style={{
              height: "40px",
              marginRight: "10px",
            }}
          />
          <a
            className="navbar-brand"
            href="#home"
            onClick={() => scrollToSection("home")}
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Sagar Exotic Escapes
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                onClick={() => scrollToSection("services")}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#packages"
                onClick={() => scrollToSection("packages")}
              >
                Packages
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={() => scrollToSection("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
            {/* <li className="nav-item">
              <button
                className="btn btn-link nav-link"
                onClick={toggleTheme}
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
