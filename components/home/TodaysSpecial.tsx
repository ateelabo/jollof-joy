"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Countdown from "@/components/ui/Countdown";

export default function TodaysSpecial() {
  return (
    <section className="py-24 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >

          {/* Image */}
          <div className="relative">
            <Image
              src="/foods/chef-special.jpg"
              alt="Chef Special"
              width={600}
              height={600}
              className="rounded-3xl shadow-2xl"
            />

            <div className="absolute top-6 left-6 bg-red-600 text-white px-5 py-2 rounded-full font-bold shadow-lg">
              🔥 25% OFF
            </div>

            <button className="absolute top-6 right-6 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition">
              <Heart />
            </button>
          </div>

          {/* Content */}
          <div>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              👨‍🍳 Chef's Recommendation
            </span>

            <h2 className="text-5xl font-bold mt-6 text-green-700">
              Grilled Chicken with Smoky Jollof Rice
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Enjoy our signature grilled chicken served with smoky Nigerian
              Jollof Rice, fresh salad, and a chilled drink. Prepared with
              authentic spices and fresh ingredients every day.
            </p>

            <div className="flex items-center gap-2 mt-6 text-yellow-500">
              <Star fill="currentColor" />
              <span className="font-semibold">4.9 (1,245 Reviews)</span>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <span className="text-4xl font-bold text-green-700">
                ₦5,500
              </span>

              <span className="line-through text-gray-400 text-xl">
                ₦7,200
              </span>
            </div>

            <Countdown />

            <button className="mt-10 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full flex items-center gap-3 transition">
              <ShoppingCart size={20} />
              Order Now
            </button>

          </div>

        </motion.div>
      </div>
    </section>
  );
}