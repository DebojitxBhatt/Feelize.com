import React from 'react';
import Swal from 'sweetalert2';

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function ContactSection() {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "79db56d4-056c-4817-9a43-a8c7e6954b83");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({ title: "Success!", text: "Message sent successfully!", icon: "success" });
      event.target.reset();
    } else {
      Swal.fire({ title: "Error!", text: "Please try again.", icon: "error" });
    }
  };

  return (
    <section id="contact" className="  text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold text-blue-400 mb-4">Contact Me 📬</h2>
        <p className="text-center text-gray-300 mb-10 max-w-xl mx-auto">
          Have a project in mind? Let's connect! Drop me a message and I’ll get back within 24 hours.
        </p>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={onSubmit} className="space-y-6 bg-white/10 p-6 rounded-xl backdrop-blur-md border border-blue-500/20">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input
                type="text" placeholder="Your Name" name="name" required
                className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
               type="email" name="email" placeholder="Your Email" required
                className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Message</label>
              <textarea
                className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="message" rows="5" placeholder="How Can I Help You?" required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white rounded-md font-semibold shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-6 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Get In Touch</h3>
              <a href="mailto:navaj.bloch22@gmail.com" className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500" />  navaj.bloch22@gmail.com
              </a>
              <p className="flex items-center gap-2 mt-2">
                <FaPhone className="text-green-500" /> +91 7383034778
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Follow Me</h3>
              <div className="flex gap-4 text-2xl">
                <a href="https://linkedin.com/in/blochnavaj" target="_blank" rel="noreferrer">
                  <FaLinkedin className="hover:text-blue-400 transition" />
                </a>
                <a href="https://github.com/Blochnavaj" target="_blank" rel="noreferrer">
                  <FaGithub className="hover:text-gray-400 transition" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Address</h3>
              <p>Vadodara</p>
              <p>Gujarat, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
