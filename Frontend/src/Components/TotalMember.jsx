 import React, { useEffect, useState } from 'react';
import navaj_photo from '../assets/navaj_photo.jpg';
import stew_photo from '../assets/stew_photo.jpg';
import syed_photo from '../assets/syed_photo.jpg';
import { FaLinkedin } from 'react-icons/fa';

function TotalMember() {
  const [team, setTeam] = useState([]);

const teamData = [
  {
    id: 1,
    name: 'Stewart Johanson',
    role: 'UI/UX Designer',
    photo: stew_photo,
    bio: 'Creates user-friendly, accessible and elegant design systems.',
    linkedin: 'https://linkedin.com/in/stew-johanson'
  },
  {
    id: 2,
    name: 'Bloch Navaj',
    role: 'Software Engineer',
    photo: navaj_photo,
    bio: 'Passionate about building scalable web apps using the MERN stack.',
    linkedin: 'https://www.linkedin.com/in/bloch-navaj/'
  },
  {
    id: 3,
    name: 'Syed F Hashmi',
    role: 'Software Engineer',
    photo: syed_photo,
    bio: 'Manages deployment pipelines and cloud infrastructure.',
    linkedin: 'https://linkedin.com/in/syedfhashmi'
  }
];



  useEffect(() => {
    // Simulate fetch (can use real API if needed)
    setTeam(teamData);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-blue-500 mb-10">
        Meet Our Team 🤝
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
         {team.map((member) => (
  <div
    key={member.id}
    className="group relative bg-white/10 backdrop-blur-lg border border-blue-400/20 rounded-lg p-6 text-white text-center shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
  >
    {/* Image + LinkedIn Hover Overlay */}
    <div className="relative w-24 h-24 mx-auto mb-4">
      <img
        src={member.photo}
        alt={member.name}
        className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
      />
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FaLinkedin className="text-white text-2xl hover:text-blue-400" />
      </a>
    </div>

    {/* Text Content */}
    <h3 className="text-xl font-semibold text-blue-400">{member.name}</h3>
    <p className="text-sm text-purple-300 mb-2">{member.role}</p>
    <p className="text-sm text-gray-300">{member.bio}</p>
  </div>
))}

      </div>
    </div>
  );
}

export default TotalMember;
