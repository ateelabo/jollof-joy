"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  item: {
    name: string;
    image: string;
    price: number;
    rating: number;
    description: string;
    tag: string;
  };
}

export default function FoodCard({ item }: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl group"
    >
      <div className="relative h-64">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        <span className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
          {item.tag}
        </span>

        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
          <Heart size={20} />
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between">
          <h3 className="font-bold text-2xl">{item.name}</h3>

          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            {item.rating}
          </div>
        </div>

        <p className="text-gray-500 mt-3">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-6">
          <span className="text-2xl font-bold text-green-700">
            ₦{item.price}
          </span>

          <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-full flex items-center gap-2">
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}