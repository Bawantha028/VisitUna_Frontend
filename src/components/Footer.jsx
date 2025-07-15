import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Heart,
} from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">Unawatuna</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Discover the magic of Sri Lanka's most beautiful beach destination.
            Your tropical paradise awaits.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
              <Instagram className="h-5 w-5" />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
              <Facebook className="h-5 w-5" />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
              <Twitter className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["About", "Attractions", "Gallery", "Events", "Contact"].map(
              (link) => (
                <li key={link}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(link.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Attractions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Attractions</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Jungle Beach</li>
            <li>Japanese Peace Pagoda</li>
            <li>Galle Fort</li>
            <li>Coconut Tree Hill</li>
            <li>Whale Watching</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-3 text-gray-400">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@unawatuna.lk</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+94 91 222 4433</span>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 mt-1" />
              <span>
                Unawatuna Beach Road
                <br />
                Galle 80600, Sri Lanka
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-gray-400 flex items-center justify-center space-x-1">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500" />
          <span>for Unawatuna Beach © 2024. All rights reserved.</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;