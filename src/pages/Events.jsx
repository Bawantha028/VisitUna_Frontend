import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Music, Waves, Sun, Camera, Star } from 'lucide-react';

const Events = () => {
  const events = [
    {
      icon: Music,
      title: "Beach Music Festival",
      date: "December 15-17, 2024",
      time: "6:00 PM - 12:00 AM",
      location: "Unawatuna Main Beach",
      description: "Annual celebration featuring local and international artists performing against the backdrop of stunning ocean views.",
      price: "LKR 2,500",
      category: "Festival",
      image: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      icon: Sun,
      title: "Sunrise Yoga Sessions",
      date: "Daily",
      time: "6:00 AM - 7:30 AM",
      location: "Coconut Tree Hill",
      description: "Start your day with peaceful yoga sessions overlooking the Indian Ocean as the sun rises.",
      price: "LKR 1,000",
      category: "Wellness",
      image: "https://images.pexels.com/photos/1032653/pexels-photo-1032653.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    },
    {
      icon: Waves,
      title: "Whale Watching Tours",
      date: "November - April",
      time: "6:30 AM - 12:00 PM",
      location: "Mirissa Harbor",
      description: "Witness majestic blue whales and dolphins in their natural habitat during the peak season.",
      price: "LKR 4,000",
      category: "Wildlife",
      image: "https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      icon: Camera,
      title: "Photography Workshop",
      date: "Every Saturday",
      time: "4:00 PM - 7:00 PM",
      location: "Various Locations",
      description: "Learn to capture the perfect tropical shots with professional photographers and local guides.",
      price: "LKR 3,500",
      category: "Workshop",
      image: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false
    }
  ];

  const seasonalHighlights = [
    {
      season: "December - March",
      title: "Peak Season",
      description: "Perfect weather with minimal rainfall and ideal conditions for all beach activities.",
      activities: ["Beach parties", "Water sports", "Sunset dinners"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      season: "April - May",
      title: "Shoulder Season",
      description: "Fewer crowds and pleasant weather, perfect for peaceful relaxation and exploration.",
      activities: ["Cultural tours", "Photography", "Spa treatments"],
      color: "from-green-500 to-teal-500"
    },
    {
      season: "November - April",
      title: "Whale Season",
      description: "The best time to witness blue whales and dolphins in the waters off Mirissa.",
      activities: ["Whale watching", "Boat tours", "Marine photography"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Events & Activities
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Immerse yourself in the vibrant culture and exciting activities that make Unawatuna 
              a year-round destination for adventure and relaxation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't miss these special events that showcase the best of Unawatuna's culture and natural beauty.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {events.filter(event => event.featured).map((event, index) => {
              const IconComponent = event.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Featured
                    </div>
                    <div className="absolute top-4 right-4 bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-bold">
                      {event.price}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>

                    <div className="space-y-3 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* All Events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">All Events & Activities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        {event.category}
                      </div>
                      <div className="absolute top-2 right-2 bg-white text-blue-600 px-2 py-1 rounded text-xs font-bold">
                        {event.price}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <IconComponent className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="text-lg font-bold text-gray-900">{event.title}</h4>
                      </div>

                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{event.description}</p>

                      <div className="space-y-1 text-xs text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <button className="w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 py-2 rounded font-medium transition-colors duration-300 text-sm">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seasonal Highlights */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seasonal Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plan your visit according to the season to make the most of Unawatuna's year-round attractions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {seasonalHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${highlight.color} p-6 text-white`}>
                  <div className="text-sm font-semibold mb-2">{highlight.season}</div>
                  <h3 className="text-xl font-bold">{highlight.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{highlight.description}</p>
                  <div className="space-y-2">
                    {highlight.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-8 text-white">
              <Users className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Stay updated on the latest events, seasonal activities, and exclusive offers. 
                Join thousands of travelers who have made Unawatuna their tropical escape.
              </p>
              <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;