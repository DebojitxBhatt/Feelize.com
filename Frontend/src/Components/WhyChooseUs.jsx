import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  "On-time Delivery",
  "Long-term Partnership",
  "Dedicated Support",
  "Cost Effective",
  "24/7 Availability",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Why <span className="text-purple-700">Choose Us?</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          We’re not just coders — we’re your partners. Here’s why clients love working with us:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              <FaCheckCircle className="text-green-600 text-2xl mt-1" />
              <div className="text-left">
                <h4 className="text-lg font-semibold text-gray-800">{feature}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
