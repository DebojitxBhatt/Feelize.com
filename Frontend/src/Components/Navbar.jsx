 import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const NavLink = [
    { name: 'About Us', id: 'about-us' },
    { name: 'Services', id: 'services' },
    { name: 'Technologies', id: 'Technologies' },
    { name: 'How it Works', id: 'how-it-works' },
  ];

  

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleForm = () => {
    setShowForm(!showForm);
    setSubmitted(false);
    closeMenu();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '79db56d4-056c-4817-9a43-a8c7e6954b83',
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full   py-4 flex justify-center fixed z-50 top-0">
        <div className="w-[95%] max-w-7xl bg-white shadow-md rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <h1 className="text-pink-600 text-2xl font-extrabold">Feelize</h1>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 items-center relative">
            {NavLink.map((link) => (
              <li
                key={link.id}
                className="relative group cursor-pointer text-black text-base font-medium"
                onMouseEnter={() => link.hasDropdown && setShowServices(true)}
                onMouseLeave={() => link.hasDropdown && setShowServices(false)}
              >
                <ScrollLink
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:text-red-600"
                >
                  {link.name}
                </ScrollLink>
                
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <button
              onClick={toggleForm}
              className=" text-white px-5 py-2 rounded-md font-medium bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] hover:from-[#c23b87] hover:to-[#0a1685] transition duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-3xl text-red-600 cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden mt-[80px] bg-white shadow-md px-6 py-4 space-y-4 z-40  fixed top-0 left-0 w-full">
          {NavLink.map((link, idx) => (
            <li key={idx}>
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={closeMenu}
                className=" text-black text-lg font-medium hover:text-red-600"
              >
                {link.name}
              </ScrollLink>
              {link.hasDropdown && (
                <ul className="mt-2 ml-2 space-y-2 pl-3 border-l-2 border-red-200">
                  {serviceDropdown.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={toggleForm}
              className="w-full mt-2 px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] hover:from-[#c23b87] hover:to-[#0a1685] transition duration-300 text-base font-medium "
            >
              Contact Us
            </button>
          </li>
        </ul>
      )}

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-lg">
            <button
              onClick={toggleForm}
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-red-600">
              Contact Us
            </h2>

            {submitted ? (
              <div className="text-green-600 text-center text-lg font-medium">
                ✅ Thank you! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
