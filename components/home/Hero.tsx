"use client";
import FloatingFoodCard from "@/components/home/FloatingFoodCard";
import Typewriter from "./Typewriter";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold inline-block mb-6">
              Abuja Nigerian
            </span>

           <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">
     Test & Enjoy the Nigerian best <br/>
     <span className="text-green-500">Food</span>
  <br />

  <Typewriter
    words={[
      "Jollof Rice 🍛",
      "Egusi Soup 🍲",
      "Suya 🌶️",
      "Pepper Soup 🐟",
      "Tuwo Shinkafa 🍚",
      "Fried Rice 🍗",
      "etc...",
    ]}
  />
</h1>

            <p className="mt-6 text-gray-200 text-lg leading-8 max-w-xl">
              Experience delicious traditional Nigerian meals prepared with
              fresh ingredients and authentic recipes. Order online or reserve
              your table today.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-full text-white font-semibold flex items-center gap-2">
                Order Now
                <FaArrowRight />
              </button>

              <button className="border border-white text-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold">
                Explore Menu
              </button>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <img
              src="/foods/jollof2.jpg"
              alt="Jollof Rice"
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
            />

            {/* Rating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute top-10 left-0 bg-white rounded-xl shadow-xl px-5 py-4"
            >
              <div className="flex items-center gap-3">
                <FaStar className="text-yellow-500 text-2xl" />
                <div>
                  <h3 className="font-bold text-green-700">4.9 Rating</h3>
                  <p className="text-gray-500 text-sm">
                    1,500+ Happy Customers
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Delivery Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute bottom-10 right-0 bg-white rounded-xl shadow-xl px-5 py-4"
            >
              <div className="flex items-center gap-3">
                <MdDeliveryDining className="text-green-600 text-3xl" />
                <div>
                  <h3 className="font-bold text-green-700">Fast Delivery</h3>
                  <p className="text-gray-500 text-sm">
                    Delivered fresh to your door
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}