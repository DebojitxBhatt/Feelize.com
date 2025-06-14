 import React from 'react'
import Pattern from './Components/Pattern'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
 
 function App() {
   return (
    <>
      <div className='fixed inset-0 z-10 overflow-hidden'> 
      <Pattern/>
     </div>

     <div className=' relative z-10 text-white'>
          <Navbar/>
          <HeroSection/>
     </div>
    </>
   
   )
 }
 
 export default App