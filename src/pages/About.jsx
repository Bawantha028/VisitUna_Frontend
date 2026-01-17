import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Heart,
  Camera,
  MapPin,
  Clock,
  Waves,
} from "lucide-react";
import Paradise from "../assets/paradise.jpg";

const About = () => {
  const stats = [
    { icon: Award, number: "#1", label: "Beach in Sri Lanka" },
    { icon: Users, number: "100K+", label: "Annual Visitors" },
    { icon: Heart, number: "25+", label: "Years of Tourism" },
    { icon: Camera, number: "∞", label: "Perfect Moments" },
  ];

  const timeline = [
    // {
    //   year: "Ancient Times",
    //   title: "Fishing Village Origins",
    //   description: "Unawatuna began as a small fishing village, with local communities living in harmony with the ocean."
    // },
    // {
    //   year: "1980s",
    //   title: "Tourism Discovery",
    //   description: "International travelers began discovering this hidden gem, attracted by its pristine beaches and coral reefs."
    // },
    // {
    //   year: "2004",
    //   title: "Resilience & Recovery",
    //   description: "The community showed remarkable resilience, rebuilding and emerging stronger while preserving its natural beauty."
    // },
    // {
    //   year: "Present",
    //   title: "World-Class Destination",
    //   description: "Now recognized globally as one of the world's best beaches, balancing tourism with environmental conservation."
    // }
    {
      year: "Mythical Era",
      title: "Ramayana Legend",
      description:
        "Unawatuna is believed to be the place where part of the Himalayan herb mountain fell from Hanuman's hands during his flight to Lanka.",
    },
    {
      year: "~3rd Century BC",
      title: "Buddhist Folklore",
      description:
        "Local legends speak of sacred relics falling here, inspiring the creation of the Unawatuna Raja Maha Viharaya temple.",
    },
    {
      year: "1505–1658",
      title: "Portuguese Period",
      description:
        "Arrival of Portuguese colonists who introduced European culture and religion.",
    },
    {
      year: "1658–1796",
      title: "Dutch Era",
      description:
        "The Dutch developed Galle Fort nearby and influenced trade and architecture.",
    },
    {
      year: "1796–1948",
      title: "British Rule",
      description:
        "Unawatuna remained a quiet fishing village while Galle expanded under British administration.",
    },
    {
      year: "1960s–1990s",
      title: "Rise of Eco-Tourism",
      description:
        "The area became popular among backpackers for its natural beauty and relaxed atmosphere.",
    },
    {
      year: "2004",
      title: "Tsunami Impact",
      description:
        "Unawatuna was heavily affected by the Indian Ocean tsunami and later rebuilt through community efforts.",
    },
    {
      year: "2005–Today",
      title: "Modern Destination",
      description:
        "Unawatuna has become a global beach destination with a balance of culture and nature.",
    },
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Unawatuna
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover the rich history, vibrant culture, and natural wonders
              that make Unawatuna one of the world's most beloved beach
              destinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={Paradise}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                A Tropical Paradise
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nestled along Sri Lanka's southern coast, Unawatuna is a
                crescent-shaped bay that has captivated travelers for
                generations. This pristine beach destination combines natural
                beauty with rich cultural heritage, creating an unforgettable
                experience for every visitor.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The beach is protected by a coral reef, making it perfect for
                swimming, snorkeling, and diving. With its laid-back atmosphere,
                stunning sunsets, and warm hospitality, Unawatuna offers an
                authentic tropical paradise experience.
              </p>
              <div className="bg-blue-100 p-6 rounded-xl">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Did you know?
                </h4>
                <p className="text-blue-800">
                  Unawatuna was named one of the top 12 beaches in the world by
                  Discovery Channel!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
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

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Story
            </h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <div
                      className={`bg-white p-6 rounded-2xl shadow-lg ${
                        index % 2 === 0 ? "mr-8" : "ml-8"
                      }`}
                    >
                      <div className="text-blue-600 font-semibold mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Unawatuna?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Waves className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Perfect Waters
                </h3>
                <p className="text-gray-600">
                  Crystal-clear waters protected by coral reefs, ideal for
                  swimming and water sports.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Prime Location
                </h3>
                <p className="text-gray-600">
                  Perfectly positioned near historic Galle Fort and other major
                  attractions.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Year-Round Beauty
                </h3>
                <p className="text-gray-600">
                  Tropical climate ensures beautiful weather and stunning
                  sunsets throughout the year.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
