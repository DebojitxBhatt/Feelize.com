import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex items-center justify-between px-4 py-6  text-white relative z-10">
                <div className="flex items-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide drop-shadow-md">
                        Feelize
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-lg font-semibold">
                    <li>
                        <a href="#how" className="hover:text-blue-600 cursor-pointer">How it Works</a>
                    </li>
                    <li>
                        <a href="#pricing" className="hover:text-blue-600 cursor-pointer">Pricing</a>
                    </li>
                    <li>
                        <a href="#faq" className="hover:text-blue-600 cursor-pointer">FAQ</a>
                    </li>
                </ul>

                {/* Hamburger for Mobile */}
                <div className="md:hidden z-20">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className="flex flex-col mt-20 px-6 gap-6 text-lg font-semibold">
                        <li onClick={() => setIsOpen(false)} className="hover:text-blue-600 cursor-pointer">How it Works</li>
                        <li onClick={() => setIsOpen(false)} className="hover:text-blue-600 cursor-pointer">Pricing</li>
                        <li onClick={() => setIsOpen(false)} className="hover:text-blue-600 cursor-pointer">FAQ</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
