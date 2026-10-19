"use client";

import { menuItems } from "@/data/menu";
import FoodCard from "@/components/menu/FoodCard";

export default function FeaturedMenu() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-green-700 font-semibold">
            FEATURED MENU
          </p>

          <h2 className="text-5xl font-bold mt-3 text-green-700">
            Our Best Dishes
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Enjoy our customers' favourite Nigerian dishes, freshly prepared every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-green-700">
          {menuItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}