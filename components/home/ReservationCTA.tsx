"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function ReservationCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-green-700 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-widest text-yellow-400 font-semibold">
            Reserve Your Table
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Enjoy an Authentic Nigerian Dining Experience
          </h2>

          <p className="text-gray-200 mt-5 max-w-2xl mx-auto">
            Book your table today and let us prepare a memorable meal for you,
            your family and your friends.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/10 backdrop-blur-xl rounded-3xl p-8 grid lg:grid-cols-2 gap-6"
        >

          <div className="relative">
            <User className="absolute left-4 top-4 text-gray-300" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 placeholder:text-gray-300 outline-none"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-300" />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 placeholder:text-gray-300 outline-none"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-4 text-gray-300" />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 placeholder:text-gray-300 outline-none"
            />
          </div>

          <div className="relative">
            <Users className="absolute left-4 top-4 text-gray-300" />
            <select
              required
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 text-white outline-none"
            >
              <option className="text-black">1 Guest</option>
              <option className="text-black">2 Guests</option>
              <option className="text-black">4 Guests</option>
              <option className="text-black">6 Guests</option>
              <option className="text-black">8+ Guests</option>
            </select>
          </div>

          <div className="relative">
            <Calendar className="absolute left-4 top-4 text-gray-300" />
            <input
              type="date"
              required
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 outline-none"
            />
          </div>

          <div className="relative">
            <Clock className="absolute left-4 top-4 text-gray-300" />
            <input
              type="time"
              required
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 outline-none"
            />
          </div>

          <div className="relative lg:col-span-2">
            <MessageSquare className="absolute left-4 top-4 text-gray-300" />
            <textarea
              rows={5}
              placeholder="Special Requests..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/20 placeholder:text-gray-300 outline-none resize-none"
            />
          </div>

          <div className="lg:col-span-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-yellow-500 py-4 text-lg font-bold text-black transition hover:bg-yellow-400"
            >
              🍽️ Reserve My Table
            </button>
          </div>

          {submitted && (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="lg:col-span-2 rounded-xl bg-green-600 p-4 text-center font-semibold"
            >
              🎉 Your reservation request has been received! We'll contact you shortly.
            </motion.div>
          )}

        </motion.form>
      </div>
    </section>
  );
}