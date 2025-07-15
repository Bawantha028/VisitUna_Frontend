import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Camera, Waves, TreePine, Building2, Fish, Star, Clock } from 'lucide-react';

const Attractions = () => {
  const attractions = [
    {
      icon: Waves,
      title: "Jungle Beach",
      description: "A hidden gem accessible through lush jungle paths, perfect for those seeking tranquility and pristine natural beauty.",
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlight: "Secluded Paradise",
      rating: 4.8,
      duration: "2-3 hours",
      difficulty: "Moderate"
    },
    {
      icon: Building2,
      title: "Japanese Peace Pagoda",
      description: "A stunning white Buddhist temple offering panoramic views of the coast and surrounding hills, perfect for meditation and photography.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlight: "Spiritual Journey",
      rating: 4.9,
      duration: "1-2 hours",
      difficulty: "Easy"
    },
    {
      icon: Building2,
      title: "Galle Fort",
      description: "A UNESCO World Heritage site showcasing Dutch colonial architecture and maritime history, with charming cafes and boutiques.",
      image: "https://images.pexels.com/photos/1078850/pexels-photo-1078850.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlight: "Historic Wonder",
      rating: 4.7,
      duration: "3-4 hours",
      difficulty: "Easy"
    },
    {
      icon: Fish,
      title: "Snorkeling & Diving",
      description: "Explore vibrant coral reefs and diverse marine life in crystal-clear tropical waters, suitable for all skill levels.",
      image: "https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlight: "Underwater Adventure",
      rating: 4.6,
      duration: "2-4 hours",
      difficulty: "Beginner to Advanced"
    },
    {
      icon: TreePine,
      title: "Coconut Tree Hill",
      description: "Iconic coconut palm groves creating the perfect backdrop for unforgettable photographs and sunset viewing.",
      image: "https://images.pexels.com/photos/1032653/pexels-photo-1032653.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlight: "Instagram Famous",
      rating: 4.5,
      duration: "1 hour",
      difficulty: "Easy"
    },
    {
      icon: Waves,
      title: "Mirissa Beach",
      description: "Nearby beach famous for whale watching and stunning sunset views over the Indian Ocean, with excellent seafood restaurants.",
      image: "https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlight: "Whale Watching",
      rating: 4.8,
      duration: "Half day",
      difficulty: "Easy"
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Must-Visit Attractions
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Discover the diverse attractions and experiences that make Unawatuna and its surroundings 
              a truly magical destination for every type of traveler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => {
              const IconComponent = attraction.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {attraction.highlight}
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-lg text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      {attraction.rating}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <IconComponent className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{attraction.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {attraction.description}
                    </p>
                    
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Duration: {attraction.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>Difficulty: {attraction.difficulty}</span>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join guided tours to discover hidden gems and local secrets that make each attraction truly special. 
                Our experienced guides will ensure you have an unforgettable experience.
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Book Your Adventure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Attractions;