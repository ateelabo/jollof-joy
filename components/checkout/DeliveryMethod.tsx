"use client";

export default function DeliveryMethod() {
  return (
    <div className="mt-8">

      <h3 className="font-bold text-xl mb-4">
        Delivery Method
      </h3>

      <div className="space-y-3">

        <label className="flex gap-3 border rounded-xl p-4 cursor-pointer">

          <input
            type="radio"
            name="delivery"
            defaultChecked
          />

          Home Delivery

        </label>

        <label className="flex gap-3 border rounded-xl p-4 cursor-pointer">

          <input
            type="radio"
            name="delivery"
          />

          Pick Up

        </label>

      </div>

    </div>
  );
}