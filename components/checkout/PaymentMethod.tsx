"use client";

export default function PaymentMethod() {
  return (
    <div className="mt-8">

      <h3 className="font-bold text-xl mb-4">
        Payment Method
      </h3>

      <div className="space-y-3">

        <label className="flex gap-3 border rounded-xl p-4">

          <input
            type="radio"
            name="payment"
            defaultChecked
          />

          Paystack

        </label>

        <label className="flex gap-3 border rounded-xl p-4">

          <input
            type="radio"
            name="payment"
          />

          Flutterwave

        </label>

        <label className="flex gap-3 border rounded-xl p-4">

          <input
            type="radio"
            name="payment"
          />

          Cash on Delivery

        </label>

      </div>

    </div>
  );
}