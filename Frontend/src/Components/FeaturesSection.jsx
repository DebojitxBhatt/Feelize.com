import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaCloud,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCode,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaReact className="text-4xl text-blue-400" />,
    title: 'Frontend Development',
    description: 'Build responsive and interactive UIs using React, Tailwind, and modern frameworks.',
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-500" />,
    title: 'Backend Development',
    description: 'Develop robust APIs, authentication, and databases using Node.js, Express & MongoDB.',
  },
  {
    icon: <FaWordpress className="text-4xl text-blue-700" />,
    title: 'WordPress Development',
    description: 'Custom WordPress themes, plugin integrations, and eCommerce-ready sites.',
  },
  {
    icon: <FaCloud className="text-4xl text-purple-400" />,
    title: 'SaaS Product Building',
    description: 'Design, develop, and deploy SaaS applications with secure, scalable architecture.',
  },
  {
    icon: (
      <div className="flex gap-2 text-4xl">
        <FaHtml5 className="text-orange-500" />
        <FaCss3Alt className="text-blue-500" />
        <FaJs className="text-yellow-400" />
      </div>
    ),
    title: 'HTML / CSS / JS',
    description: 'Craft beautiful websites using the core technologies of the web.',
  },
  {
    icon: <FaCode className="text-4xl text-pink-500" />,
    title: 'Full Stack Development',
    description: 'End-to-end web solutions using the MERN stack, from UI to deployment.',
  },
];

function FeaturesSection() {
  return (
    <section className="py-16 mt-6 px-4  text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">What I Can Do For You 🚀</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Whether it’s frontend finesse or backend logic, I build seamless digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-blue-500/20 hover:scale-105 transition duration-300 text-center"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-blue-300 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
