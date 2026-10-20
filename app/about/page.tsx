"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F0]">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-green-700 font-semibold">
              OUR STORY
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mt-4">
              Bringing the Taste of Nigeria to Your Table
            </h1>

            <p className="text-gray-600 mt-6 leading-8">
              At Jollof Joy, we celebrate the rich flavors
              of Nigerian cuisine. From smoky Jollof Rice
              to delicious traditional soups, every dish
              is prepared with care and authentic spices.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              Our mission is to make every meal memorable
              and bring people together through great food.
            </p>
          </motion.div>

          <div className="relative h-80 md:h-[450px]">
            <Image
              src="/foods/jollof2.jpg"
              alt="Traditional Nigerian Jollof Rice"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}