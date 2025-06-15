 import React from 'react'
import Pattern from './Components/Pattern'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import TotalMember from './Components/TotalMember'
import PricingSection from './Components/PricingSection'
import FeaturesSection from './Components/FeaturesSection'
import ContactSection from './Components/ContactSection'
import FAQSection from './Components/FAQSection'
  
 function App() {
   return (
    <>
      <div className='fixed inset-0 z-10 overflow-hidden'> 
      <Pattern/>
     </div>

     <div className=' relative z-10 text-white'>
          <Navbar/>
          <HeroSection/>
          <FeaturesSection/>
          <PricingSection/>
          <TotalMember/>
          <FAQSection/>

                     <ContactSection/>
     </div>
    </>
   
   )
 }
 
 export default App