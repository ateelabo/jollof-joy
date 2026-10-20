"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Amina",
    meal: "Jollof Rice",
    text: "The smoky Jollof Rice was delicious. The flavors were amazing!",
  },
  {
    name: "Ibrahim",
    meal: "Egusi Soup",
    text: "A lovely taste of traditional Nigerian cooking. I really enjoyed it.",
  },
  {
    name: "Grace",
    meal: "Grilled Chicken",
    text: "The chicken was flavorful and paired perfectly with the rice.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F0] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold">
            WORDS FROM OUR GUESTS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mt-4">
            Customer Reviews
          </h1>

          <p className="text-gray-600 mt-5">
            Every meal is an opportunity to make someone smile.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >
              <div className="flex gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={19}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-7 mt-6">
                "{review.text}"
              </p>

              <div className="mt-7 border-t pt-5">
                <h2 className="font-bold text-green-800">
                  {review.name}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Favorite meal: {review.meal}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}