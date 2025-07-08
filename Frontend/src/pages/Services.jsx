import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import featuredServices from '../data/ServicesData';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20 mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
        All <span className="text-indigo-600">Services</span>
      </h2>
      <p className="text-center text-gray-600 mb-12 text-sm md:text-base">
        Browse all our services. Click on any service to see more details.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredServices.map((service) => (
          <Link to={`/services/${service.id}`} key={service.id}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer h-[480px] flex flex-col">
              <img
                src={`/src/assets/${service.image}`}
                alt={service.title}
                className="h-[250px] w-full object-cover bg-white"
              />
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
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
