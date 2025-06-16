 import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import iocn_1 from '../assets/icon_1.png'

const servicesData = [
  {
    id: 1,
    title: 'Mobile App Development',
    icon: iocn_1,
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
    {
    id: 1,
    title: 'Mobile App Development',
    icon: iocn_1,
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
    {
    id: 1,
    title: 'Mobile App Development',
    icon: iocn_1,
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
    {
    id: 1,
    title: 'Mobile App Development',
    icon: iocn_1,
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
    {
    id: 1,
    title: 'Mobile App Development',
    icon: iocn_1,
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
    {
    id: 1,
    title: 'Mobile App Development',
    icon: iocn_1,
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
];

const ServicesSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="bg-[#fbfaff] py-16 px-4 text-center overflow-x-hidden scrollbar-hide overflow-y-hidden " id='services'>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Services we offer</h2>

      <Slider {...settings}>
        {servicesData.map((service, index) => (
        <div key={service.id} className="px-4">
  <div
    className={`
      transition-all duration-300 p-6 h-full cursor-pointer rounded-xl shadow-md 
      hover:shadow-lg bg-white 
      ${index === activeSlide ? 'border-4 border-pink-500 scale-105' : 'border border-gray-200'}
    `}
  >
    {/* Icon */}
    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
        <img src={service.icon} alt={service.title} className="w-8 h-8" />
      </div>
    </div>

    {/* Title */}
    <h3 className={`text-xl font-bold mb-2 ${index === activeSlide ? 'text-pink-600' : 'text-gray-800'}`}>
      {service.title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 text-sm leading-relaxed">
      {service.description}
    </p>
  </div>
</div>

        ))}
      </Slider>
    </section>
  );
};

export default ServicesSlider;
