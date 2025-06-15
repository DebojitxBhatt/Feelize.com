import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'How long does it take to build a complete website?',
    answer: 'It depends on the complexity, but most websites are completed within 1 to 3 weeks. Urgent MVPs can be done in 48 hours.',
  },
  {
    question: 'Can I request changes after the project is delivered?',
    answer: 'Yes! I offer a revision period where you can suggest changes. Ongoing support packages are also available.',
  },
  {
    question: 'Do you work with both frontend and backend?',
    answer: 'Yes, I specialize in full stack development using the MERN stack (MongoDB, Express, React, Node.js).',
  },
  {
    question: 'Is hosting included in the service?',
    answer: 'Yes. I can deploy your project to platforms like Vercel, Render, or AWS depending on your needs.',
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes. Support is included for a limited period, and you can opt for a monthly maintenance plan afterward.',
  },
  {
    question: 'Can I cancel or pause a project mid-way?',
    answer: 'Yes, with notice. If work has already been completed, partial payments may apply depending on the milestone.',
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 mt-7 px-4 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">Frequently Asked Questions ❓</h2>
        <p className="text-gray-300">Here are some common questions people ask me before working together.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-blue-500/20 rounded-lg bg-white/5 overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold text-lg text-white">{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 text-blue-400' : 'text-gray-400'
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-300 text-sm transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
