
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    name: "Smoky Nigerian Jollof Rice",
    category: "Rice Dishes",
    image: "/gallery/jollof.jpg",
  },
  {
    name: "Traditional Egusi Soup",
    category: "Soups",
    image: "/gallery/egusi.jpg",
  },
  {
    name: "Spicy Nigerian Suya",
    category: "Grills",
    image: "/gallery/suya.jpg",
  },
  {
    name: "Delicious Pepper Soup",
    category: "Local Delicacies",
    image: "/gallery/pepper-soup.jpg",
  },
  {
    name: "Golden Grilled Chicken",
    category: "Grills",
    image: "/gallery/pounded-yam.jpg",
  },
  {
    name: "Refreshing Zobo Drink",
    category: "Drinks",
    image: "/gallery/zobo.png",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F0]">
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-green-700 font-semibold tracking-widest">
            A FEAST FOR YOUR EYES
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mt-4">
            Our Food Gallery
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 leading-7">
            Explore the vibrant colors, rich flavors, and
            authentic Nigerian dishes that make every meal
            at Jollof Joy special.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-4 bg-green-700 text-white text-xs font-semibold px-3 py-2 rounded-full">
                  {item.category}
                </span>
              </div>

              <div className="p-5">
                <h2 className="text-xl font-bold text-green-800">
                  {item.name}
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  Authentic Nigerian flavor, made with care.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}