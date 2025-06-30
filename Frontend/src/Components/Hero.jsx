import React from 'react';
import HeroImg from '../assets/hero_img.png'; // Save your image here

const Hero = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 mt-12 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-6 leading-tight">
            Great <span className="text-[#DE4396]">Product</span> is <br />
            <span className="text-black font-bold">built by great</span>{' '}
            <span className="text-[#9b59b6] font-bold">teams</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            We help build and manage a team of world-class developers <br />
            to bring your vision to life
          </p>
          <button className="px-6 py-3 rounded-md text-white font-semibold bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] hover:from-[#c23b87] hover:to-[#0a1685] transition duration-300">
            Let’s get started!
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img src={HeroImg} alt="Team working" className="w-full h-auto" />
        </div>
      </div>
{/* Half Circle Bottom Center */}
<div className="w-full flex justify-center bg-white">
  <div className="w-28 h-14 rounded-t-full bg-gradient-to-tr from-[#8e2de2] via-[#DE4396] to-[#DE4396]  "></div>
</div>

      
    </section>
  );
};

export default Hero;
