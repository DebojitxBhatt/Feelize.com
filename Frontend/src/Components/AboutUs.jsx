 // AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHeart, FaStar, FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 px-6 md:px-20 pt-16 pb-24" id="about-us">
      {/* Hero Intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Digital <span className="text-purple-700">Growth</span>  with Feelize
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          At <span className="text-indigo-600 font-semibold">Feelize</span>, we specialize in creating
          intuitive, aesthetic, and performance-driven web experiences that help startups and businesses thrive.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-24">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 rounded-2xl shadow p-8 text-center"
        >
          <FaBullseye className="text-4xl text-indigo-600 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To build innovative, user-friendly digital solutions that simplify business processes and connect people to technology.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-50 rounded-2xl shadow p-8 text-center"
        >
          <FaEye className="text-4xl text-indigo-600 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To become a globally recognized tech partner trusted for delivering seamless digital experiences that leave lasting impressions.
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default AboutUs;
