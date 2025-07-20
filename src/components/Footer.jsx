// import React from "react";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   Instagram,
//   Facebook,
//   Heart,
//   Twitter,
// } from "lucide-react";

// const Footer = () => (
//   <footer className="bg-gray-900 text-white">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="flex flex-col md:flex-row md:items-start gap-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 flex-1">
//           {/* Brand */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <MapPin className="h-8 w-8 text-blue-400" />
//               <span className="text-2xl font-bold">Unawatuna</span>
//             </div>
//             <p className="text-gray-400 leading-relaxed">
//               Discover the magic of Sri Lanka's most beautiful beach destination.
//               Your tropical paradise awaits.
//             </p>
//             <div className="flex space-x-4">
//               <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
//                 <Instagram className="h-5 w-5" />
//               </button>
//               <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
//                 <Facebook className="h-5 w-5" />
//               </button>
//               <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
//                 <Twitter className="h-5 w-5" />
//               </button>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {["About", "Attractions", "Gallery", "Events", "Contact"].map(
//                 (link) => (
//                   <li key={link}>
//                     <button
//                       onClick={() =>
//                         document
//                           .getElementById(link.toLowerCase())
//                           ?.scrollIntoView({ behavior: "smooth" })
//                       }
//                       className="text-gray-400 hover:text-white transition-colors"
//                     >
//                       {link}
//                     </button>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* Attractions */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Top Attractions</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>Jungle Beach</li>
//               <li>Japanese Peace Pagoda</li>
//               <li>Galle Fort</li>
//               <li>Coconut Tree Hill</li>
//               <li>Whale Watching</li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <div className="space-y-3 text-gray-400">
//               <div className="flex items-center space-x-2">
//                 <Mail className="h-4 w-4" />
//                 <span>info@unawatuna.lk</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Phone className="h-4 w-4" />
//                 <span>+94 91 222 4433</span>
//               </div>
//               <div className="flex items-start space-x-2">
//                 <MapPin className="h-4 w-4 mt-1" />
//                 <span>
//                   Unawatuna Beach Road
//                   <br />
//                   Galle 80600, Sri Lanka
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//         <h3 className="text-lg font-semibold mb-4 ml-9">View in Map</h3>
//         <div className="flex justify-center items-center md:ml-8 mt-8 md:mt-0">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31743.0127460243!2d80.23375477284199!3d6.011677944282783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae172f162bf926d%3A0xc0444c5e8377446c!2sUnawatuna!5e0!3m2!1sen!2slk!4v1752560649713!5m2!1sen!2slk"
//             width="auto"
//             height="180"
//             style={{ border: 0, borderRadius: "1rem" }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Unawatuna Map"
//           />
//         </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-800 mt-8 pt-8 text-center">
//         <p className="text-gray-400 flex items-center justify-center space-x-1">
//           <span>Made with</span>
//           <Heart className="h-4 w-4 text-red-500" />
//           <span>for Unawatuna Beach © 2025. All Rights Reserved.</span>
//         </p>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;

import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Heart,
  Twitter,
} from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row flex-wrap gap-10">
        {/* Brand Section */}
        <div className="flex-1 min-w-[250px] space-y-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">Unawatuna</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Discover the magic of Sri Lanka's most beautiful beach destination.
            Your tropical paradise awaits.
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              aria-label="Instagram"
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="min-w-[200px]">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["About", "Attractions", "Gallery", "Events", "Contact"].map((link) => (
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
            ))}
          </ul>
        </div>

        {/* Top Attractions */}
        <div className="min-w-[200px]">
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
        <div className="min-w-[220px] space-y-4">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="text-gray-400 space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@unawatuna.lk</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+94 91 222 4433</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1" />
              <span>
                Unawatuna Beach Road<br />
                Galle 80600, Sri Lanka
              </span>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="flex-1 min-w-[280px]">
          <h3 className="text-lg font-semibold mb-4">View in Map</h3>
          <div className="w-full h-[200px] rounded-xl overflow-hidden">
            <iframe
              title="Unawatuna Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31743.0127460243!2d80.23375477284199!3d6.011677944282783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae172f162bf926d%3A0xc0444c5e8377446c!2sUnawatuna!5e0!3m2!1sen!2slk!4v1752560649713!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p className="text-gray-400 flex items-center justify-center gap-1">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500" />
          <span>for Unawatuna Beach © 2025. All Rights Reserved.</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
