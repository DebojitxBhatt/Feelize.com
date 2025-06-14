import React from 'react';
import Card from './Card';
import Input from './Input';
import ServiceCard from './ServiceCard';

function HeroSection() {
    return (
        <div className="grid items-center justify-center   px-4">
            {/* Header Box */}
            <div className="border px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md shadow-lg mx-auto flex items-center gap-4">
                <span className="text-3xl sm:text-4xl animate-bounce">🚀</span>
                <h1 className="text-blue-400 font-semibold text-lg sm:text-xl md:text-2xl tracking-wide">
                   Smart Solutions, Fast Delivery — Your Product, Our Code 💡
                </h1>
            </div>

         {/* Big Heading */}
<div className="text-center font-extrabold tracking-tight text-blue-500 drop-shadow-lg px-4 mt-7 mb-7">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
    <span className="text-yellow-400 animate-pulse text-4xl sm:text-5xl">⚡</span>
    <span>Your Idea Built in</span>
    <span className="bg-gradient-to-r from-purple-400 to-blue-600 text-transparent bg-clip-text">
      48 Hours
    </span>
  </h1>
 
</div>


            {/* 3D Card */}
            <div>
                <Card />
            </div>

            {/* Form */}
            <div className='text-center justify-center flex mt-9'>
                <Input />
            </div>

            {/* services Card  */}
            <div>
                <ServiceCard />
            </div>
        </div>
    );
}

export default HeroSection;
