import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Feelize</h2>
          <p className="text-sm leading-relaxed">
            We build modern, scalable web solutions using the latest technologies. Your product idea is in good hands.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#how-it-works" className="hover:text-white">How it works</a></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Frontend Development</li>
            <li>Full Stack Web Apps</li>
            <li>API Integrations</li>
            <li>UI/UX Design</li>
            <li>WordPress Development</li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:hello@feelize.dev" className="text-purple-400 hover:underline">info@feelize.com</a></li>
            <li> <a className="hover:text-purple-400 hover:underline" href="https://wellfound.com/company/feelize">Wellfound Profile</a></li>
            <li>Phone: +91 7383034778</li>
            <li>Location: NYC, USA</li>
            <li>Support: 24/7 Online</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Feelize. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
