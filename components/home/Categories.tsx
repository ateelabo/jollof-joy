"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Soup,
  Beef,
  CupSoda,
  CookingPot,
} from "lucide-react";

const categories = [
  {
    title: "Rice Dishes",
    icon: "🍚",
    meals: "12 Meals",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Soups",
    icon: "🍲",
    meals: "15 Meals",
    color: "from-green-400 to-green-600",
  },
  {
    title: "Grills",
    icon: "🍖",
    meals: "8 Meals",
    color: "from-red-500 to-orange-600",
  },
  {
    title: "Swallows",
    icon: "🍛",
    meals: "10 Meals",
    color: "from-yellow-500 to-orange-400",
  },
  {
    title: "Local Delicacies",
    icon: "🍗",
    meals: "7 Meals",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Drinks",
    icon: "🥤",
    meals: "14 Items",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-green-700 font-semibold text-center">
            OUR MENU
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-center mt-3 text-green-700">
            Browse By Category
          </h2>

          <p className="text-center text-gray-600 mt-5 max-w-2xl mx-auto">
            Discover authentic Nigerian dishes carefully prepared with
            fresh ingredients and unforgettable flavours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl bg-white shadow-xl overflow-hidden cursor-pointer text-green-700"
            >
              <div
                className={`h-3 bg-gradient-to-r ${category.color}`}
              />

              <div className="p-8">

                <div className="text-6xl">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {category.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {category.meals}
                </p>

                <button className="flex items-center gap-2 mt-8 font-semibold text-green-700 group-hover:gap-4 transition-all">
                  Explore
                  <ArrowRight size={18} />
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}