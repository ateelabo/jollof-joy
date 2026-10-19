"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryCardProps {
  image: string;
  title: string;
  category: string;
}

export default function GalleryCard({
  image,
  title,
  category,
}: GalleryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl shadow-xl"
    >
      <div className="relative h-80 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span className="inline-block rounded-full bg-green-600 px-3 py-1 text-xs font-semibold">
          {category}
        </span>

        <h3 className="mt-3 text-xl font-bold">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}