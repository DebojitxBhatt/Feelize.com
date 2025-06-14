 import React from 'react'
import Pattern from './Components/Pattern'
import Navbar from './Components/Navbar'
 
 function App() {
   return (
    <>
      <div className='relative z-10 h-screen w-screen overflow-hidden'> 
      <Pattern/>
     </div>

     <div className='absolute top-0 left-0 z-20 h-screen w-screen overflow-hidden'>
          <Navbar/>
     </div>
    </>
   
   )
 }
 
 export default App