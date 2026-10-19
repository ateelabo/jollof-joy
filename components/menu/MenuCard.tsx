"use client";

import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";


interface MenuCardProps {
  item: {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
    description: string;
  };
}

export default function MenuCard({ item }: MenuCardProps) {
    const { addToCart } = useCart();
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2">
      <div className="relative h-60">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />

        <button className="absolute text-green-700 right-4 top-4 rounded-full bg-white p-2 shadow">
          <Heart size={18} />
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-2xl text-green-700 font-bold">{item.name}</h3>

        <p className="mt-2 text-gray-500">
          {item.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-yellow-500">
          <Star fill="currentColor" size={18} />
          {item.rating}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-700">
            ₦{item.price}
          </span>

          <button
  onClick={() =>
    addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: 1,
    })
  }
  className="flex items-center gap-2 rounded-full bg-green-700 px-5 py-3 text-white hover:bg-green-800"
>
  <ShoppingCart size={18} />
  Add to Cart
</button>
        </div>
      </div>
    </div>
  );
}