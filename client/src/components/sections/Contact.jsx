import { useState } from 'react';
import { personalInfo } from '../../data/personalInfo';
import { socialLinks } from '../../data/socialLinks';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email functionality using mailto
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.name} (${formData.email})`;
    window.location.href = mailtoLink;
    
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a question or want to collaborate? Feel free to reach out!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-orange-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <span className="text-orange-500">📍</span> Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-orange-500 transition group"
                >
                  <div className="w-12 h-12 bg-blue-400/20 border border-blue-400/30 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/30 transition">
                    <span>📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-semibold">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-orange-500 transition group"
                >
                  <div className="w-12 h-12 bg-blue-400/20 border border-blue-400/30 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/30 transition">
                    <span>📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="font-semibold">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 bg-blue-400/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                    <span>📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="font-semibold">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <span className="text-blue-400">🔗</span> Connect With Me
              </h3>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400/20 border border-blue-400/30 rounded-lg flex items-center justify-center text-2xl hover:bg-orange-500/20 hover:border-orange-500/30 hover:scale-110 transition"
                    title={link.platform}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none transition"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none transition resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
