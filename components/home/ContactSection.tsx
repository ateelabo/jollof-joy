"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-green-700 font-semibold uppercase tracking-widest">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold mt-4 text-green-700">
            We'd Love to Hear From You
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            Whether you want to reserve a table, place an order, or ask a question,
            we're here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <MapPin className="text-green-700 mt-1" />
              <div>
                <h3 className="font-bold text-xl text-green-700">Address</h3>
                <p className="text-gray-600">
                  123 Restaurant Street, Abuja, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg ">
              <Phone className="text-green-700 mt-1" />
              <div>
                <h3 className="font-bold text-xl text-green-700">Phone</h3>
                <p className="text-gray-600">+234 800 000 0000</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <Mail className="text-green-700 mt-1" />
              <div>
                <h3 className="font-bold text-xl text-green-700">Email</h3>
                <p className="text-gray-600">jollofjoy@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <Clock className="text-green-700 mt-1" />
              <div>
                <h3 className="font-bold text-xl text-green-700">Opening Hours</h3>
                <p className="text-gray-600">
                  Monday – Sunday
                  <br />
                  8:00 AM – 10:00 PM
                </p>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl"
          >

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl p-4 mb-5 focus:ring-2 focus:ring-green-600 outline-none text-green-700"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl p-4 mb-5 focus:ring-2 focus:ring-green-600 outline-none text-green-700"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-xl p-4 mb-5 focus:ring-2 focus:ring-green-600 outline-none text-green-700"
            />

            <textarea
              rows={6}
              placeholder="Your Message..."
              className="w-full border rounded-xl p-4 mb-6 resize-none focus:ring-2 focus:ring-green-600 outline-none text-green-700"
            />

            <button
              className="w-full bg-green-700 hover:bg-green-800 transition text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>

          </motion.form>

        </div>

        {/* Google Map */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=Abuja,Nigeria&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}