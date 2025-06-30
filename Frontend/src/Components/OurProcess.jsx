 import React from 'react';
import process from '../assets/feelize_development_process.png';

function OurProcess() {
  return (
    <section className="w-full  py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <img 
          src={process} 
          alt="Feelize development process diagram" 
          className="w-full max-w-5xl rounded-lg  "
        />
      </div>
    </section>
  );
}

export default OurProcess;
