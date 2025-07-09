import React, { useState } from 'react';
import { motion } from 'framer-motion';
import featuredServices from '../data/ServicesData';
import { Link } from 'react-router-dom';

const FeaturedServices = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="featured-services" className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
        Featured <span className="text-indigo-600">Services</span>
      </h2>
      <p className="text-center text-gray-600 mb-12 text-sm md:text-base">
        Explore our most in-demand services - built to accelerate your product development and business growth.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredServices.slice(0, 3).map((service, index) => (
          <Link to={`/services/${service.id}`} key={service.id}>
            <motion.div
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer h-[480px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image or fallback title */}
              {!imageErrors[service.id] ? (
                <img
                  src={`/src/assets/${service.image}`}
                  alt={service.title}
                  onError={() => handleImageError(service.id)}
                  className="h-[250px] w-full object-cover bg-white"
                />
              ) : (
                <div className="h-[220px] w-full bg-gray-200 flex items-center justify-center text-center px-4">
                  <span className="text-gray-500 font-semibold">{service.title}</span>
                </div>
              )}
              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                    <span className="text-sm text-indigo-600 font-medium">{service.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs text-gray-500">{service.category}</span>
                  <span className="text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-1 rounded-md cursor-pointer shine-btn">
                    Learn more
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/services" className="animated-button">
          <span className="text">See All Services</span>
          <span className="circle"></span>
          <svg className="arr-1" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 12h14"/></svg>
          <svg className="arr-2" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 12h14"/></svg>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedServices;
