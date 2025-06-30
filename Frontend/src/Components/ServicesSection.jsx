 import React from 'react';
import { motion } from 'framer-motion';
import { TbWorldCode, TbCode, TbServer2 } from 'react-icons/tb';
import { RiWordpressFill } from 'react-icons/ri';
import { LuLayers } from 'react-icons/lu';
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3 } from 'react-icons/bi';

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

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#fbfaff] py-16 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Services <span className="text-pink-600">We Offer</span> 
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-center text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
