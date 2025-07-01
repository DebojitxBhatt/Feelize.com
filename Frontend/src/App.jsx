 import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ServicesSection from './Components/ServicesSection'
import OurProcess from './Components/OurProcess'
import TeamSection from './Components/TeamSection'
import PricingSection from './Components/PricingSection'
import TechStackSection from './Components/TechStackSection'
import WhyChooseUs from './Components/WhyChooseUs'
import Footer from './Components/Footer'
import AboutUs from './Components/AboutUs'
import ComparisonSection from './Components/ComparisonSection'
    
  
 function App() {
   return (
    <>
    <div> 
      <Navbar/>
      <Hero/>
      <ServicesSection/>
      <OurProcess/>
      <AboutUs/>
      <TeamSection/>
      <PricingSection/>
      <TechStackSection/>
      <WhyChooseUs/>
      <ComparisonSection/>
        <Footer/>
    </div>
    </>
   
   )
 }
 
 export default App