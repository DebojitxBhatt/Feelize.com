 import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import ceoImg from '../assets/navaj_photo.jpg';
import ctoImg from '../assets/stew_photo.jpg';
import devImg from '../assets/syed_photo.jpg';

const team = [
  {
    name: 'Bloch Navaj',
    role: 'CEO',
    photo: ceoImg,
    linkedin: 'https://linkedin.com/in/blochnavaj',
  },
 
  {
    name: 'Syed F Hashmi',
    role: 'CTO',
    photo: devImg,
    linkedin: 'https://linkedin.com/in/syedfhashmi',
  },
   {
    name: 'Stewart Johanson',
    role: 'Product Developer',
    photo: ctoImg,
    linkedin: 'https://linkedin.com/in/stew-johanson',
  }
];

function TotalMember() {
  return (
    <section id="team" className="py-16 px-4   text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-400 mb-4">Meet the Core Team 👥</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          We're a small but mighty team bringing your ideas to life with code, strategy, and design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="group relative bg-white/10 backdrop-blur-md border border-blue-500/20 rounded-xl p-6 text-center shadow-md transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-24 h-24 mx-auto mb-4">
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
              />
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaLinkedin className="text-white text-xl hover:text-blue-400" />
              </a>
            </div>
            <h3 className="text-xl font-semibold text-blue-300">{member.name}</h3>
            <p className="text-sm text-purple-300">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TotalMember;
