"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F0] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-green-700 font-semibold">
            WE'D LOVE TO HEAR FROM YOU
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mt-4">
            Get in Touch
          </h1>

          <p className="text-gray-600 mt-5">
            Questions about our food or an upcoming order?
            We'd be happy to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <Phone className="mx-auto text-green-700" size={32} />
            <h2 className="text-xl font-bold mt-4 text-yellow-500">Call Us</h2>
            <p className="text-gray-600 mt-2">
              +234 800 000 0000
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <Mail className="mx-auto text-green-700" size={32} />
            <h2 className="text-xl font-bold mt-4 text-yellow-500">Email Us</h2>
            <p className="text-gray-600 mt-2">
              jollofjoy@gmail.com
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <MapPin className="mx-auto text-green-700" size={32} />
            <h2 className="text-xl font-bold mt-4 text-yellow-500">Visit Us</h2>
            <p className="text-gray-600 mt-2">
              Abuja, Nigeria
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}