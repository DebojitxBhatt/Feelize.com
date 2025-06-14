 import React from 'react';

function ServiceCard() {
  const services = [
    {
      icon: '🚀',
      title: 'Full Stack Development',
      description:
        'Build scalable and responsive web apps using the MERN stack with clean architecture.',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description:
        'Design user-friendly interfaces that are both beautiful and highly functional.',
    },
    {
      icon: '☁️',
      title: 'Cloud Deployment',
      description:
        'Deploy and maintain your applications on cloud platforms like Vercel, Render, or AWS.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-4 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white p-6 rounded-xl shadow-xl border border-blue-500/20 group hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105"
        >
          {/* Icon */}
          <div className="text-4xl mb-4 transition-transform duration-500 group-hover:rotate-12">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-2 text-blue-400">{service.title}</h3>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>

          {/* Hover Glow Animation */}
          <div className="absolute -inset-0.5 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-xl blur-lg transition duration-500 z-0" />
        </div>
      ))}
    </div>
  );
}

export default ServiceCard;
