"use client";

import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/reviews/TestimonialCard";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-green-700 font-semibold">
            CUSTOMER REVIEWS
          </p>

          <h2 className="text-5xl font-bold mt-3 text-green-700">
            Loved by Thousands
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            See what our happy customers are saying about our delicious Nigerian dishes.
          </p>

          <div className="flex justify-center items-center gap-3 mt-8">
            <span className="text-5xl font-bold text-green-700">
              4.9
            </span>

            <span className="text-gray-500">
              /5 from 2,000+ Reviews
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-green-700">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}