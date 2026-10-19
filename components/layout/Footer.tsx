"use client";

import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import {
  MapPin,
  Phone,
  Mail,
  ChevronUp,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="relative bg-[#0B3D2E] text-white">

      {/* Back To Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="absolute -top-7 left-1/2 -translate-x-1/2 bg-yellow-500 hover:bg-yellow-400 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
      >
        <ChevronUp />
      </button>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">
              Jollof<span className="text-yellow-400">Joy</span>
            </h2>

            <p className="mt-5 text-gray-300 leading-8">
              Bringing authentic Nigerian flavours to your table with
              freshly prepared meals, quality ingredients and excellent
              customer service.
            </p>

            <div className="flex gap-4 mt-6">

              <button className="bg-white/10 p-3 rounded-full hover:bg-yellow-500 transition">
                <FaFacebook size={18} />
              </button>

              <button className="bg-white/10 p-3 rounded-full hover:bg-yellow-500 transition">
                <FaInstagram size={18} />
              </button>

              <button className="bg-white/10 p-3 rounded-full hover:bg-yellow-500 transition">
                <FaXTwitter size={18} />
              </button>

              <button className="bg-white/10 p-3 rounded-full hover:bg-yellow-500 transition">
                <FaYoutube size={18} />
              </button>

            </div>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Reservation</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Our Menu
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>🍚 Rice Dishes</li>
              <li>🍲 Soups</li>
              <li>🍖 Grills</li>
              <li>🍛 Swallows</li>
              <li>🥤 Drinks</li>
            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <MapPin className="text-yellow-400" />
                <span>Abuja, Nigeria</span>
              </div>

              <div className="flex gap-3">
                <Phone className="text-yellow-400" />
                <span>+234 800 000 0000</span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-yellow-400" />
                <span>jollofjoy@gmail.com</span>
              </div>

            </div>

            {/* Newsletter */}

            <div className="mt-8">

              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-full px-5 py-3 text-black outline-none"
              />

              <button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-full font-semibold transition">
                Subscribe
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} JollofJoy. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-gray-400">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Paystack</span>
            <span>Flutterwave</span>
          </div>

        </div>

      </div>

    </footer>
  );
}