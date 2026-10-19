"use client";

import DeliveryMethod from "./DeliveryMethod";
import PaymentMethod from "./PaymentMethod";

export default function CheckoutForm() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-8">
        Checkout
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          placeholder="Full Name"
          className="border rounded-xl p-4"
        />

        <input
          placeholder="Phone Number"
          className="border rounded-xl p-4"
        />

        <input
          placeholder="Email"
          className="border rounded-xl p-4"
        />

        <input
          placeholder="State"
          className="border rounded-xl p-4"
        />

        <input
          placeholder="City"
          className="border rounded-xl p-4"
        />

        <input
          placeholder="Postal Code"
          className="border rounded-xl p-4"
        />

      </div>

      <textarea
        rows={4}
        placeholder="Delivery Address"
        className="border rounded-xl p-4 w-full mt-5"
      />

      <DeliveryMethod />

      <PaymentMethod />

      <textarea
        rows={3}
        placeholder="Order Notes"
        className="border rounded-xl p-4 w-full mt-5"
      />

      <button className="mt-8 w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-bold">
        Place Order
      </button>

    </div>
  );
}