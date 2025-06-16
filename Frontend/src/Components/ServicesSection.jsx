 import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { TbWorldCode, TbCode, TbServer2 } from "react-icons/tb";
import { RiWordpressFill } from "react-icons/ri";
import { LuLayers } from "react-icons/lu";
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";

const servicesData = [
  {
    id: 1,
    title: 'Full Stack Development',
    icon: <TbWorldCode className="text-4xl text-fuchsia-600" />,
    description: 'Modern web apps from frontend to backend using MERN and full stack tools.',
  },
  {
    id: 2,
    title: 'Frontend Development',
    icon: <TbCode className="text-4xl text-sky-600" />,
    description: 'Dynamic and performant user interfaces with React, Tailwind, and more.',
  },
  {
    id: 3,
    title: 'Backend Development',
    icon: <TbServer2 className="text-4xl text-green-600" />,
    description: 'High-performance APIs and scalable logic using Node.js and Express.',
  },
  {
    id: 4,
    title: 'HTML / CSS / JavaScript',
    icon: (
      <div className="flex gap-2 text-3xl">
        <BiLogoHtml5 className="text-orange-600" />
        <BiLogoCss3 className="text-blue-600" />
        <BiLogoJavascript className="text-yellow-500" />
      </div>
    ),
    description: 'Pixel-perfect static and interactive websites using foundational tech.',
  },
  {
    id: 5,
    title: 'WordPress Development',
    icon: <RiWordpressFill className="text-4xl text-blue-700" />,
    description: 'Custom plugins, themes, and WordPress CMS websites with flexibility.',
  },
  {
    id: 6,
    title: 'UI/UX Design',
    icon: <LuLayers className="text-4xl text-purple-500" />,
    description: 'Crafting interfaces that delight users and improve usability with Figma.',
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
    <section className="bg-[#fbfaff] py-16 px-4 text-center overflow-x-hidden scrollbar-hide overflow-y-hidden" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Services we offer</h2>

      <Slider {...settings}>
        {servicesData.map((service, index) => (
          <div key={service.id} className="px-4">
            <motion.div
              className={`
                transition-all duration-300 p-6 h-full cursor-pointer rounded-xl shadow-md 
                hover:shadow-lg bg-white 
                ${index === activeSlide ? 'border-4 border-pink-500 scale-105' : 'border border-gray-200'}
              `}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-2 ${index === activeSlide ? 'text-pink-600' : 'text-gray-800'}`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ServicesSlider;
