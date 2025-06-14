 import React from 'react'
import Pattern from './Components/Pattern'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import TotalMember from './Components/TotalMember'
 
 function App() {
   return (
    <>
      <div className='fixed inset-0 z-10 overflow-hidden'> 
      <Pattern/>
     </div>

     <div className=' relative z-10 text-white'>
          <Navbar/>
          <HeroSection/>
          <TotalMember/>
     </div>
    </>
   
   )
 }
 
 export default App