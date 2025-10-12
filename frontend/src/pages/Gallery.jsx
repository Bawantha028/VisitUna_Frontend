import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Camera, Heart, Star, Filter } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Beach",
    "Sunset",
    "Landscape",
    "Culture",
    "Diving",
    "Nature",
    "Heritage",
    "Wildlife",
  ];

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Golden Hour at Unawatuna",
      category: "Sunset",
      photographer: "VisitUNA Team",
    },
    {
      src: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Crystal Clear Waters",
      category: "Beach",
      photographer: "Local Photographer",
    },
    {
      src: "https://images.pexels.com/photos/1032653/pexels-photo-1032653.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Coconut Tree Hill",
      category: "Landscape",
      photographer: "Travel Enthusiast",
    },
    {
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Peace Pagoda Views",
      category: "Culture",
      photographer: "Cultural Explorer",
    },
    {
      src: "https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Underwater Paradise",
      category: "Diving",
      photographer: "Marine Photographer",
    },
    {
      src: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Jungle Beach Secret",
      category: "Nature",
      photographer: "Nature Lover",
    },
    {
      src: "https://images.pexels.com/photos/1078850/pexels-photo-1078850.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Historic Galle Fort",
      category: "Heritage",
      photographer: "History Buff",
    },
    {
      src: "https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Mirissa Whale Watching",
      category: "Wildlife",
      photographer: "Wildlife Expert",
    },
    {
      src: "https://images.pexels.com/photos/1032652/pexels-photo-1032652.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Tropical Paradise",
      category: "Beach",
      photographer: "Beach Lover",
    },
    {
      src: "https://images.pexels.com/photos/1032651/pexels-photo-1032651.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Sunset Silhouettes",
      category: "Sunset",
      photographer: "Sunset Chaser",
    },
    {
      src: "https://images.pexels.com/photos/1007024/pexels-photo-1007024.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Coastal Landscape",
      category: "Landscape",
      photographer: "Landscape Artist",
    },
    {
      src: "https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Traditional Culture",
      category: "Culture",
      photographer: "Cultural Photographer",
    },
  ];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Picture Perfect Moments
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Experience the breathtaking beauty of Unawatuna through our
              carefully curated collection of stunning photographs capturing the
              essence of this tropical paradise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center text-gray-600 mr-4">
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full w-fit mb-2">
                    {image.category}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-2">
                    by {image.photographer}
                  </p>
                  <div className="flex items-center text-white text-sm">
                    <Camera className="h-4 w-4 mr-2" />
                    <span>View Full Size</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 text-center"
          >
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">50K+</div>
              <div className="text-gray-600">Photo Likes</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <Camera className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">1000+</div>
              <div className="text-gray-600">Photos Shared</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="w-full h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-1">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-blue-300 mb-1">
                {filteredImages[selectedImage].category}
              </p>
              <p className="text-gray-300 text-sm">
                by {filteredImages[selectedImage].photographer}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;