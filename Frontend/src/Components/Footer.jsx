import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBriefcase,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdHeadsetMic } from "react-icons/md";
import Logo from "../assets/LOGO_FEELIZE.png";

const quickLinks = [
  {
    label: "Services",
    path: "#",
  },
  {
    label: "Pricing",
    path: "#",
  },
  {
    label: "How it works",
    path: "#",
  },
];

const services = [
  {
    label: "Frontend Development",
  },
  {
    label: "Full Stack Web Apps",
  },
  {
    label: "API Integrations",
  },
  {
    label: "UI/UX Design",
  },
  {
    label: "WordPress Development",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Logo & Description */}
        <div>
          {/* <img
            src={Logo}
            alt="logo"
            className="mb-0 w-40  object-contain object-top -mt-2"
          /> */}
          <h3 className="text-2xl font-extrabold tracking-wider text-purple-500 uppercase mb-5 w-40">
            Feelize
          </h3>
          <p className="text-sm leading-relaxed">
            We build modern, scalable web solutions using the latest
            technologies. Your product idea is in good hands.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="h-0.5 w-8 bg-purple-600 rounded"></div>
          </div>

          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx} className="group">
                <a
                  href={link.path}
                  className="flex items-center gap-2 transition-all duration-200 group-hover:translate-x-2 hover:text-white"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-purple-600">
                    –
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold text-white ">Our Services</h3>
            <div className="h-0.5 w-8 bg-purple-600 rounded"></div>
          </div>

          <ul className="space-y-2 text-sm">
            {services.map((link, i) => (
              <li key={i} className="group">
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold text-white ">Contact Us</h3>
            <div className="h-0.5 w-8 bg-purple-600 rounded"></div>
          </div>
          <ul className="space-y-2 text-sm">
            {/* Email */}
            <li className="flex items-start gap-3">
              <MdEmail className="text-purple-400 mt-1" />
              <div>
                <div className="text-gray-400">Send Us Email</div>
                <a
                  href="mailto:info@feelize.com"
                  className="text-purple-400 hover:underline break-all"
                >
                  info@feelize.com
                </a>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-start gap-3">
              <MdPhone className="text-purple-400 mt-1" />
              <div>
                <div className="text-gray-400">Call Us</div>
                <span>+91 7383034778</span>
              </div>
            </li>

            {/* Location */}
            <li className="flex items-start gap-3">
              <MdLocationOn className="text-purple-400 mt-1" />
              <div>
                <div className="text-gray-400">Location</div>
                <span>NYC, USA</span>
              </div>
            </li>

            {/* Wellfound Profile */}
            <li className="flex items-start gap-3">
              <FaBriefcase className="text-purple-400 mt-1" />
              <div>
                <div className="text-gray-400">
                  <a
                    className="text-purple-400 hover:underline"
                    href="https://wellfound.com/company/feelize"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    wellfound&nbsp;Profile
                  </a>
                </div>
              </div>
            </li>

            {/* Support */}
            <li className="flex items-start gap-3">
              <MdHeadsetMic className="text-purple-400 mt-1" />
              <div>
                <div className="text-gray-400">Support</div>
                <span>24/7 Online</span>
              </div>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition"
            >
              <FaInstagram />
            </a>
          </div>
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