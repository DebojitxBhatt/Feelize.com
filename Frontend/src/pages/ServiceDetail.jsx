import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredServices, imageMap } from '../data/ServicesData';

const ServiceDetail = ({ openContactModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const service = featuredServices.find(s => String(s.id) === id);

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Service Not Found</h2>
        <Link to="/services" className="text-indigo-600 underline">Back to Services</Link>
      </div>
    );
  }

  const getNumericPrice = (price) => {
    // Remove '/hr', '/hour', '/ hourly', etc. from the price string
    return price.replace(/\/(hr|hour| hourly)/i, '').trim();
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20 min-h-[60vh] flex justify-center items-center mt-20">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Image Top Left, Large */}
        <div className="md:w-auto w-full flex items-start justify-start p-0">
          <div className="flex flex-col items-start w-full">
            <img
              src={imageMap[service.image]}
              alt={service.title}
              className="rounded-xl object-contain max-w-[500px] max-h-[500px]"
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="mt-16 ml-2 w-full">
              <div className="bg-white border border-indigo-100 shadow px-6 py-4 rounded-xl flex flex-row items-start justify-between w-full">
                <div className="flex flex-col items-start">
                  <span className="text-base font-semibold text-gray-700">Starting price:</span>
                  <span className="text-xs text-gray-500 mt-1">Contact us for a custom quote or package options.</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-indigo-600 text-transparent bg-clip-text leading-tight">{getNumericPrice(service.price)}</span>
                  <span className="text-xs text-gray-400 font-semibold">/hourly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content Right */}
        <div className="flex-1 flex flex-col p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-gray-900">{service.title}</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold cursor-default select-none">{service.category}</span>
          </div>
          <div className="mb-6 text-gray-700 text-base leading-relaxed">{service.description}</div>
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-2">What We Offer</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {service.serviceDetail && Array.isArray(service.serviceDetail) && service.serviceDetail.length > 0 ? (
                service.serviceDetail.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))
              ) : (
                <>
                  <li>Comprehensive solution tailored to your needs</li>
                  <li>Expert support and guidance throughout the project</li>
                  <li>Timely delivery and transparent communication</li>
                  <li>Ongoing maintenance and support options</li>
                </>
              )}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button type="button" onClick={openContactModal} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-semibold text-center shine-btn">Contact us</button>
            <Link to="/services" className="text-indigo-600 underline text-center self-center">Back to Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail; 