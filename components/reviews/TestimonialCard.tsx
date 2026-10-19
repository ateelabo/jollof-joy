"use client";

import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  testimonial: {
    name: string;
    location: string;
    image: string;
    rating: number;
    review: string;
  };
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl shadow-xl p-6"
    >
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={70}
          height={70}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold flex items-center gap-2">
            {testimonial.name}

            <BadgeCheck
              size={18}
              className="text-blue-500"
            />
          </h3>

          <p className="text-gray-500 text-sm">
            {testimonial.location}
          </p>
        </div>
      </div>

      <div className="flex mt-4">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            fill="currentColor"
            className="text-yellow-500"
          />
        ))}
      </div>

      <p className="text-gray-600 mt-5 leading-7">
        "{testimonial.review}"
      </p>
    </motion.div>
  );
}