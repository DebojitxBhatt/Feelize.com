 import React from 'react';

function Card() {
  return (
    <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white p-6 rounded-xl shadow-xl w-[90%] max-w-md mx-auto border border-blue-500/30">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-blue-400">MyServices.jsx</h2>
        <span className="bg-blue-600/20 text-xs px-2 py-1 rounded-full text-blue-300">.jsx</span>
      </div>

      {/* Code Area */}
      <pre className="bg-[#0f172a] rounded-md p-4 text-sm overflow-x-auto font-mono border border-white/10">
        <code>
{`const services = [
  "🚀 Full Stack Web Development",
  "🎨 Responsive UI/UX Design",
  "⚙️ RESTful API Integration",
  "☁️ Cloud Deployment & Hosting"
];`}
        </code>
      </pre>

      {/* Footer */}
      <div className="mt-4 text-right text-xs text-slate-400 italic">
        Coded with 💻 & passion
      </div>
    </div>
  );
}

export default Card;
