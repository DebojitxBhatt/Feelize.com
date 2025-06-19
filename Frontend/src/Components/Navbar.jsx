 import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const NavLink = [
    { name: 'About Us', id: '#home' },
    { name: 'Services', id: '#services' },
    { name: 'Case Studies', id: '#case-studies' },
    { name: 'How it Works', id: '#how-it-works' },
    { name: 'Hire', id: '#hire' },
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

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "79db56d4-056c-4817-9a43-a8c7e6954b83", // Replace with your Web3Forms access key
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50 scrollbar-hide">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-bold text-3xl text-fuchsia-500">Feelize</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            {NavLink.map((link) => (
              <li key={link.id}>
                <a
                  href={link.id}
                  className="text-black text-lg font-medium hover:text-[#5a6ae0] transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <button
              onClick={toggleForm}
              className="px-4 py-2 rounded-md text-white font-medium 
                bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] 
                hover:from-[#c23b87] hover:to-[#0a1685] transition duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-3xl text-[#6675F7] cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
            {NavLink.map((link) => (
              <li key={link.id}>
                <a
                  href={link.id}
                  onClick={closeMenu}
                  className="block text-black text-lg font-medium hover:text-[#5a6ae0] transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleForm}
                className="w-full mt-2 px-4 py-2 rounded-md text-white 
                  bg-gradient-to-r from-[#DE4396] to-[#0D1C9F] 
                  hover:from-[#c23b87] hover:to-[#0a1685] 
                  text-base font-medium transition duration-300"
              >
                Contact Us
              </button>
            </li>
          </ul>
        )}
      </nav>

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

            <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">
              Contact Us
            </h2>

            {submitted ? (
              <div className="text-green-600 text-center text-lg font-medium">
                ✅ Thank you! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="hidden"
                  name="access_key"
                  value="feb0ac40-5a5e-49a6-bbdc-8c508052706e"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-2 rounded-md transition"
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
