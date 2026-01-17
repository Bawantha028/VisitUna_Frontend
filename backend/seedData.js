const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

// Load env vars
dotenv.config();

// Import models
const User = require("./models/User");
const Event = require("./models/Event");
const GalleryImage = require("./models/GalleryImage");

// Connect to DB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    console.log("🌱 Starting database seeding...");

    // Clear existing data
    await User.deleteMany();
    await Event.deleteMany();
    await GalleryImage.deleteMany();

    console.log("✅ Cleared existing data");

    // Create admin user
    const adminPassword = await bcrypt.hash("Admin@123", 10);
    const admin = await User.create({
      firstName: "Admin",
      lastName: "User",
      email: "admin@visituna.lk",
      password: adminPassword,
      role: "admin",
      subscribeNewsletter: true,
    });

    console.log("✅ Created admin user");
    console.log("   Email: admin@visituna.lk");
    console.log("   Password: Admin@123");

    // Create sample events
    const events = await Event.insertMany([
      {
        title: "Beach Music Festival",
        description:
          "Annual celebration featuring local and international artists performing against the backdrop of stunning ocean views.",
        date: "December 15-17, 2024",
        time: "6:00 PM - 12:00 AM",
        location: "Unawatuna Main Beach",
        price: 2500,
        category: "Festival",
        image:
          "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600",
        featured: true,
        availableSlots: 500,
      },
      {
        title: "Sunrise Yoga Sessions",
        description:
          "Start your day with peaceful yoga sessions overlooking the Indian Ocean as the sun rises.",
        date: "Daily",
        time: "6:00 AM - 7:30 AM",
        location: "Coconut Tree Hill",
        price: 1000,
        category: "Wellness",
        image:
          "https://images.pexels.com/photos/1032653/pexels-photo-1032653.jpeg?auto=compress&cs=tinysrgb&w=600",
        featured: false,
        availableSlots: 20,
      },
      {
        title: "Whale Watching Tours",
        description:
          "Witness majestic blue whales and dolphins in their natural habitat during the peak season.",
        date: "November - April",
        time: "6:30 AM - 12:00 PM",
        location: "Mirissa Harbor",
        price: 4000,
        category: "Wildlife",
        image:
          "https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=600",
        featured: true,
        availableSlots: 30,
      },
      {
        title: "Photography Workshop",
        description:
          "Learn to capture the perfect tropical shots with professional photographers and local guides.",
        date: "Every Saturday",
        time: "4:00 PM - 7:00 PM",
        location: "Various Locations",
        price: 3500,
        category: "Workshop",
        image:
          "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600",
        featured: false,
        availableSlots: 15,
      },
    ]);

    console.log(`✅ Created ${events.length} sample events`);

    // Create sample gallery images
    const galleryImages = await GalleryImage.insertMany([
      {
        src: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Golden Hour at Unawatuna",
        category: "Sunset",
        photographer: "VisitUNA Team",
        likes: 125,
      },
      {
        src: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Crystal Clear Waters",
        category: "Beach",
        photographer: "Local Photographer",
        likes: 98,
      },
      {
        src: "https://images.pexels.com/photos/1032653/pexels-photo-1032653.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Coconut Tree Hill",
        category: "Landscape",
        photographer: "Travel Enthusiast",
        likes: 156,
      },
      {
        src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Peace Pagoda Views",
        category: "Culture",
        photographer: "Cultural Explorer",
        likes: 87,
      },
      {
        src: "https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Underwater Paradise",
        category: "Diving",
        photographer: "Marine Photographer",
        likes: 203,
      },
      {
        src: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
        title: "Jungle Beach Secret",
        category: "Nature",
        photographer: "Nature Lover",
        likes: 142,
      },
    ]);

    console.log(`✅ Created ${galleryImages.length} sample gallery images`);

    console.log("\n🎉 Database seeding completed successfully!\n");
    console.log("You can now login with:");
    console.log("Email: admin@visituna.lk");
    console.log("Password: Admin@123\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedData();
