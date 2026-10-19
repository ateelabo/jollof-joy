"use client";

export default function OrderSummary() {
  const subtotal = 15000;
  const delivery = 1000;
  const tax = 500;

  const total = subtotal + delivery + tax;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-10">

      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₦15,000</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>₦1,000</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>₦500</span>
        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold text-green-700">
          <span>Total</span>
          <span>₦{total.toLocaleString()}</span>
        </div>

      </div>

      <input
        placeholder="Coupon Code"
        className="border rounded-xl w-full p-4 mt-8"
      />

      <button className="mt-4 bg-yellow-500 hover:bg-yellow-400 w-full py-3 rounded-xl font-bold">
        Apply Coupon
      </button>

    </div>
  );
}