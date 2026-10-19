"use client";

import { motion } from "framer-motion";
import GalleryCard from "@/components/gallery/GalleryCard";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section className="py-24 bg-[#FFF8F0]">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold text-green-700">
            GALLERY
          </p>

          <h2 className="mt-3 text-5xl font-bold text-green-700">
            Taste Before You Visit
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Explore our freshly prepared Nigerian dishes, refreshing drinks,
            and warm dining experience.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <GalleryCard
              key={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <button className="rounded-full bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800">
            View Full Menu
          </button>
        </div>

      </div>
    </section>
  );
}