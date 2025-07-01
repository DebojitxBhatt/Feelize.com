 import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BugOff, Code2, Clock4, Wand2, Frown, Smile } from "lucide-react";

const comparisons = [
  {
    left: { icon: <BugOff />, title: "Buggy Interfaces" },
    right: { icon: <Wand2 />, title: "Polished UI/UX Magic" },
  },
  {
    left: { icon: <Clock4 />, title: "Late Deliveries" },
    right: { icon: <Sparkles />, title: "Lightning Speed Projects" },
  },
  {
    left: { icon: <Code2 />, title: "Old Tech Stack" },
    right: { icon: <Code2 />, title: "MERN & Modern Tools" },
  },
  {
    left: { icon: <Frown />, title: "Confusing UX" },
    right: { icon: <Smile />, title: "Human-Centered UX" },
  },
];

const ComparisonSection = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white py-24 px-6 md:px-28">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12"
      >
        Old Ways <span className="text-gray-500">vs</span> <span className="text-blue-500">Feelize</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {comparisons.map((comp, index) => (
          <div key={index} className="flex justify-between items-center gap-10 group">
            {/* Left - Old Dev */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1f1f1f] p-6 rounded-xl w-full shadow-md border border-gray-700 group-hover:scale-[1.03] transition duration-300"
            >
              <div className="flex items-center gap-3 text-red-400">
                {comp.left.icon}
                <p className="text-lg font-semibold">{comp.left.title}</p>
              </div>
            </motion.div>

            {/* Divider Line */}
            <div className="w-2 h-16 md:h-32 bg-gradient-to-b from-gray-500 to-blue-500 rounded-full mx-auto" />

            {/* Right - Feelize */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 p-6 rounded-xl w-full shadow-lg group-hover:scale-[1.03] transition duration-300"
            >
              <div className="flex items-center gap-3 text-white">
                {comp.right.icon}
                <p className="text-lg font-semibold">{comp.right.title}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Background Blur Shape */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/30 to-transparent rounded-full blur-3xl opacity-20" />
    </div>
  );
};

export default ComparisonSection;
