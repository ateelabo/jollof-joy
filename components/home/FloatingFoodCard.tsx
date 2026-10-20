"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

interface FloatingFoodCardProps {
  image: string;
  name: string;
  price: string;
  rating: number;
  className?: string;
}

export default function FloatingFoodCard({
  image,
  name,
  price,
  rating,
  className = "",
}: FloatingFoodCardProps) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
        rotate: 1,
      }}
      className={`absolute bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-3 w-52 border border-white/40 ${className}`}
    >
      <div className="relative h-32 w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="mt-3">
        <h3 className="font-bold text-gray-800">{name}</h3>

        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-green-700">
            ₦{price}
          </span>

          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}