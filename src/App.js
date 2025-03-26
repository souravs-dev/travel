import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Packages from './components/Packages';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Home />
        <Services />
        <Packages />
        <About />
        <Contact />
        <Footer />
        <ScrollToTop />
        <SpeedInsights/>
      </div>
    </ThemeProvider>
  );
}

export default App;