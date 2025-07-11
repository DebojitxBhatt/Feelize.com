import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Hero from './Components/Hero'
import ServicesSection from './Components/ServicesSection'
import FeaturedServices from './Components/FeaturedServices'
import OurProcess from './Components/OurProcess'
import AboutUs from './Components/AboutUs'
import TeamSection from './Components/TeamSection'
import PricingSection from './Components/PricingSection'
import TechStackSection from './Components/TechStackSection'
import WhyChooseUs from './Components/WhyChooseUs'
import ContactFormModal from './Components/ContactFormModal'
import { ToolsLoader } from './Components/RouteLoadingAnimations'
import LegalPolicy from './Components/LegalPolicy';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only trigger loading animation for /services or /services/:id (not for /)
    const isServicesRoute =
      location.pathname === '/services' ||
      (/^\/services\//.test(location.pathname) && location.pathname.split('/').length === 3);
    if (isServicesRoute) {
      setShowTools(true);
      setLoading(false);
      const toolsTimeout = setTimeout(() => {
        setShowTools(false);
        setLoading(true);
      }, 900); // Show tools for 900ms
      const loadingTimeout = setTimeout(() => setLoading(false), 1700); // Show loader for 800ms after tools
      return () => {
        clearTimeout(toolsTimeout);
        clearTimeout(loadingTimeout);
      };
    } else {
      setShowTools(false);
      setLoading(false);
    }
  }, [location.pathname]);

  // --- Scroll to anchor and clean hash from URL on homepage ---
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Remove hash from URL without reloading
        window.history.replaceState({}, document.title, '/');
      }
    }
  }, [location.pathname, location.hash]);
  

  const openContactModal = () => setShowForm(true);
  const closeContactModal = () => setShowForm(false);

  return (
    <>
      <ToolsLoader show={showTools} />
      <ScrollToTop />
      <Navbar openContactModal={openContactModal}/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
           
            <FeaturedServices/>
            <OurProcess/>
            <AboutUs/>
            <TeamSection/>
            
            <TechStackSection/>
            <WhyChooseUs/>
            {/* <ComparisonSection/> */}
          </>
        } />
        <Route path="/services/*" element={
          <Routes>
            <Route path="" element={<Services />} />
            <Route path=":id" element={<ServiceDetail openContactModal={openContactModal} />} />
          </Routes>
        } />
        <Route path='/legal' element={<LegalPolicy />} />
      </Routes>
      <ContactFormModal isOpen={showForm} onClose={closeContactModal} />
      <Footer/>
    </>
  )
}

export default App