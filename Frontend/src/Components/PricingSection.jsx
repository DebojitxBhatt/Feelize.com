const pricingPlans = [
  {
    id: 1,
    title: "Basic",
    price: "$99/hr",
    description: "Perfect for small tasks or testing an idea.",
    features: [
      "Frontend Development",
      "Basic Bug Fixing",
      "Responsive Design",
      "Up to 10 hours/month",
    ],
    popular: false,
  },
  {
    id: 2,
    title: "Pro",
    price: "$180/hr",
    description: "Best for startups and growing businesses.",
    features: [
      "Full Stack Development",
      "API Integration",
      "Performance Optimization",
      "Up to 40 hours/month",
      "Priority Support",
    ],
    popular: true,
  },
  {
    id: 3,
    title: "Enterprise",
    price: "$250/hr",
    description: "Ideal for large-scale, custom solutions.",
    features: [
      "Dedicated Team Support",
      "DevOps & Cloud Deployment",
      "Custom Feature Development",
      "Unlimited Hours",
      "Dedicated Manager",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          Our <span className="text-purple-700">Pricing</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Flexible hourly pricing tailored to your needs. Choose the perfect plan based on the size and scale of your project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`border rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 bg-white ${
              plan.popular ? "border-purple-700 scale-105" : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <div className="text-sm bg-purple-700 text-white px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold text-purple-700 mb-4">{plan.price}</p>
            <p className="text-gray-600 mb-6">{plan.description}</p>

            <ul className="text-gray-700 space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-xl">
              Choose {plan.title}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
