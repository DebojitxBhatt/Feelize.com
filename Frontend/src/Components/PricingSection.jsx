import React from 'react';
import { FaCheck } from 'react-icons/fa';
 
const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Basic access for personal use',
    features: [
      'Basic UI components',
      'Community support',
      'Limited project storage',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29/mo',
    description: 'Advanced tools for professionals',
    features: [
      'All Free features',
      'Premium UI kit',
      'Priority support',
      'Team collaboration',
      'Custom domain support',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$99/mo',
    description: 'Full suite for enterprises',
    features: [
      'Everything in Pro',
      'Unlimited projects & storage',
      'Advanced analytics',
      'Dedicated account manager',
      'Early access to new features',
    ],
    highlighted: false,
  },
];

function PricingSection() {
   return (
    <section id='pricing' className="py-16 px-4 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white mt-7">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Pricing Plans</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Choose a plan that fits your needs and scale your ideas with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative border border-blue-500/20 backdrop-blur-xl bg-white/10 p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 ${
              plan.highlighted ? 'border-2 border-blue-500 shadow-blue-500/40' : ''
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-4 py-1 rounded-full uppercase tracking-wide font-semibold shadow-md">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-blue-400 mb-2">{plan.name}</h3>
            <p className="text-4xl font-extrabold mb-2">{plan.price}</p>
            <p className="text-gray-300 mb-6">{plan.description}</p>
            <ul className="text-sm space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-white/90">
                  <FaCheck className="text-green-400 mr-2" /> {feature}
                </li>
              ))}
            </ul>
          <button
  onClick={() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 shadow-md"
>
  {plan.name === 'Free' ? 'Get Started' : 'Choose Plan'}
</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
