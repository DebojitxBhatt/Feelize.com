 import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

// ✅ Keep this ONE declaration only
const processSteps = [
  {
    id: 1,
    title: "Research",
    desc: "It is a long established fact that a reader will be distra by the readable content of a page.",
    icon: "🧪",
  },
  {
    id: 2,
    title: "Design",
    desc: "It is a long established fact that a reader will be distra by the readable content of a page.",
    icon: "✏️",
  },
  {
    id: 3,
    title: "Develope",
    desc: "It is a long established fact that a reader will be distra by the readable content of a page.",
    icon: "💻",
  },
  {
    id: 4,
    title: "Test",
    desc: "It is a long established fact that a reader will be distra by the readable content of a page.",
    icon: "📋",
  },
];

const OurProcess = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0D1C9F] mb-12">
        Our <span className="text-pink-600">Process</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col items-start text-left relative"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="absolute top-4 right-4 text-4xl text-gray-300 font-bold">
              {String(step.id).padStart(2, "0")}
            </div>

            <div className="bg-white p-4 rounded-xl shadow-inner mb-4">
              <span className="text-5xl text-pink-600">{step.icon}</span>
            </div>

            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {step.title}
            </h3>
            <div className="w-12 h-1 bg-pink-600 mb-2 rounded-full"></div>
            <p className="text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
