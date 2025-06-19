 import React, { useState } from "react";
import ContactFormModal from "./ContactFormModal";
 
const pricingPlans = [
  {
    id: 1,
    title: "Basic",
    price: "$499",
    description: "Frontend design for startups and small businesses.",
    tags: ["Frontend Design"],
    features: [
      "Responsive Web Pages",
      "Cross-browser Compatibility",
      "React.js Development",
      "UI Polish & Animations",
    ],
    popular: false,
  },
  {
    id: 2,
    title: "Pro",
    price: "$899",
    description: "Frontend + Backend services for complete solutions.",
    tags: ["Frontend", "Backend"],
    features: [
      "Everything in Basic",
      "API Integration",
      "Authentication System",
      "MERN Stack Development",
    ],
    popular: true,
  },
  {
    id: 3,
    title: "Enterprise",
    price: "$1499",
    description: "Complete system with admin dashboard & scaling.",
    tags: ["Frontend", "Backend", "Admin Panel"],
    features: [
      "Everything in Pro",
      "Admin Dashboard",
      "User & Role Management",
      "Cloud Deployment & Support",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleChoosePlan = (planTitle) => {
    setSelectedPlan(planTitle);
    setOpenModal(true);
  };

  return (
    <section className="bg-gray-50 py-20 px-6" id="pricing">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          Our <span className="text-purple-700">Pricing</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Fixed cost plans tailored for all business sizes. Select a package that suits your development needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl p-8 transition duration-300 bg-white border-2 hover:shadow-xl ${
              plan.popular
                ? "border-purple-700 shadow-md scale-105"
                : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <div className="text-sm bg-purple-700 text-white px-4 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold text-purple-700 mb-3">{plan.price}</p>
            <p className="text-gray-600 mb-4">{plan.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {plan.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="text-gray-700 space-y-3 mb-8 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500 text-lg">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleChoosePlan(plan.title)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-2 rounded-xl transition"
            >
              Choose {plan.title}
            </button>
          </div>
        ))}
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default PricingSection;
