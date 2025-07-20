import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, Play, Award, Users, Heart, Camera, X} from "lucide-react";
import Hero from "../assets/HeroImg.jpg"
import Coast from "../assets/paradise.jpg"

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const stats = [
    { icon: Award, number: "#1", label: "Beach in Sri Lanka" },
    { icon: Users, number: "100K+", label: "Annual Visitors" },
    { icon: Heart, number: "25+", label: "Years of Tourism" },
    { icon: Camera, number: "∞", label: "Perfect Moments" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={Hero}
            alt="Unawatuna Beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Welcome to
            <span className="block text-blue-300">VisitUNA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed text-gray-100"
          >
            Your gateway to Unawatuna - one of the world's most beautiful
            beaches in Sri Lanka's tropical paradise
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/attractions"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 shadow-lg"
            >
              Explore Unawatuna
            </Link>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center space-x-2 text-white bg-red-400 hover:bg-red-500 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
                <Play className="h-6 w-6" />
              </motion.div>
              <motion.span whileHover={{ scale: 1.1 }}>
                Watch Video
              </motion.span>
            </button>
          </motion.div>

          {showVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
              <div className="relative w-full max-w-3xl p-4">
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="relative pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/Z1ivvaxEkLk"
                    title="Unawatuna Beach | Sri Lanka (Cinematic Tour with Sunrise and Sunset)"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white hover:text-blue-300"
          >
            <ArrowDown className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover Paradise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nestled on the sun-kissed southern coast of Sri Lanka, Unawatuna is a breathtaking crescent-shaped bay, famed for its golden sands, clear blue waters, and a timeless charm that continues to enchant travelers from around the world.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={Coast}
                alt="Unawatuna coastline"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                A Tropical Paradise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Once a quiet fishing village, Unawatuna has blossomed into one
                of Sri Lanka’s most beloved beach destinations, all while
                holding onto its natural charm and coastal soul.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Protected by a coral reef, its calm, clear waters are perfect
                for swimming, snorkeling, and diving. With golden sands,
                breathtaking sunsets, and a warm, welcoming spirit, Unawatuna
                offers a tropical experience you’ll never forget.
              </p>
              <Link
                to="/about"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Plan Your Visit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to make your Unawatuna experience
              unforgettable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30, boxShadow: "0 0px 0px rgba(0,0,0,0)" }}
              whileInView={{ opacity: 1, y: 0, boxShadow: "0 0px 0px rgba(0,0,0,0)" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 18 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Attractions</h3>
                <p className="text-blue-100 mb-6">
                  Discover hidden gems and must-visit spots around Unawatuna
                </p>
                <Link
                  to="/attractions"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  Explore Now
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1,type: "spring", stiffness: 200, damping: 18 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Events</h3>
                <p className="text-orange-100 mb-6">
                  Join exciting events and activities throughout the year
                </p>
                <Link
                  to="/events"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  View Events
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2,type: "spring", stiffness: 200, damping: 18 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-green-500 to-teal-500 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Gallery</h3>
                <p className="text-green-100 mb-6">
                  Browse stunning photos of Unawatuna's natural beauty
                </p>
                <Link
                  to="/gallery"
                  className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  View Gallery
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
