"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b py-6"
          >
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
            </div>

            <span className="font-bold">
              ₦{item.price * item.quantity}
            </span>
          </div>
        ))
      )}
    </main>
  );
}