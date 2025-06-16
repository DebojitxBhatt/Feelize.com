 import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = [
    { name: 'About Us', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Case Studies', id: 'case-studies' },
    { name: 'How it Works', id: 'how-it-works' },
    { name: 'Hire', id: 'hire' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="font-bold text-3xl text-fuchsia-500">Feelize</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {NavLink.map((link) => (
            <li
              key={link.id}
              className="text-black text-lg font-medium hover:text-[#5a6ae0] cursor-pointer transition duration-300"
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:flex">
          <button className="px-4 py-2 rounded-md text-white font-medium 
  bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] 
  hover:from-[#c23b87] hover:to-[#0a1685] transition duration-300">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl text-[#6675F7] cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {NavLink.map((link) => (
            <li
              key={link.id}
              className="text-black text-lg font-medium hover:text-[#5a6ae0] cursor-pointer transition duration-300"
            >
              {link.name}
            </li>
          ))}
          <li>
            <button className="w-full mt-2 px-4 py-2 rounded-md text-white 
  bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] 
  hover:from-[#c23b87] hover:to-[#0a1685] 
  text-base md:text-lg font-medium transition duration-300">
  Contact Us
</button>

          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
