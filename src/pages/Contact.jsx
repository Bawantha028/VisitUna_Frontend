import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+94 91 222 4433", "+94 77 123 4567"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@visituna.lk", "bookings@visituna.lk"],
      description: "Send us your inquiries"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Unawatuna Beach Road", "Unawatuna, Galle 80600, Sri Lanka"],
      description: "Visit our information center"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Sun: 8:00 AM - 8:00 PM", "Emergency: 24/7"],
      description: "We're here to help"
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              Ready to plan your perfect getaway to Unawatuna? We're here to help you create 
              unforgettable memories in this tropical paradise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+94 77 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">{detail}</p>
                          ))}
                          <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-300 to-cyan-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <h4 className="text-xl font-bold">Interactive Map</h4>
                    <p className="text-blue-100">Unawatuna Beach Location</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-6 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Follow Our Journey</h3>
                <p className="text-pink-100 mb-4">
                  Stay connected with daily updates, beautiful photos, and travel inspiration.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-white text-pink-500 p-3 rounded-lg hover:bg-pink-50 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </button>
                  <button className="bg-white text-pink-500 p-3 rounded-lg hover:bg-pink-50 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  <button className="bg-white text-pink-500 p-3 rounded-lg hover:bg-pink-50 transition-colors">
                    <Globe className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions about visiting Unawatuna</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What's the best time to visit Unawatuna?",
                answer: "The best time to visit is from December to March when the weather is dry and perfect for beach activities. However, Unawatuna is beautiful year-round!"
              },
              {
                question: "How do I get to Unawatuna from Colombo?",
                answer: "You can take a train to Galle (about 2.5 hours) and then a tuk-tuk or bus to Unawatuna (15 minutes), or drive directly (about 2 hours)."
              },
              {
                question: "Are there accommodation options for all budgets?",
                answer: "Yes! Unawatuna offers everything from budget guesthouses and hostels to luxury resorts and boutique hotels."
              },
              {
                question: "Is Unawatuna safe for swimming?",
                answer: "Yes, Unawatuna beach is protected by a coral reef, making it one of the safest beaches in Sri Lanka for swimming."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;