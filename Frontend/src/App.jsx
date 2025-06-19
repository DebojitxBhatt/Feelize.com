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
 
  
 function App() {
   return (
    <>
    <div> 
      <Navbar/>
      <Hero/>
      <ServicesSection/>
      <OurProcess/>
      <TeamSection/>
      <PricingSection/>
      <TechStackSection/>
      <WhyChooseUs/>
      <Footer/>
    </div>
    </>
   
   )
 }
 
 export default App