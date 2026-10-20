"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFF8F0] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-green-700 font-semibold">
            YOUR TABLE IS WAITING
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mt-4">
            Reserve a Table
          </h1>

          <p className="text-gray-600 mt-5">
            Plan your next delicious Nigerian dining experience.
          </p>
        </motion.div>

        <form
          className="bg-white rounded-3xl shadow-lg p-6 md:p-10 space-y-6 text-green-500"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label htmlFor="name" className="block font-medium mb-2">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your name"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="guests" className="block font-medium mb-2">
                Number of Guests
              </label>
              <select
                id="guests"
                name="guests"
                required
                defaultValue="2"
                className="w-full border rounded-xl px-4 py-3 bg-white"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                  <option key={number} value={number}>
                    {number} {number === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block font-medium mb-2">
                Reservation Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                min={new Date().toLocaleDateString("en-CA")}
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div>
              <label htmlFor="time" className="block font-medium mb-2">
                Reservation Time
              </label>
              <input
                id="time"
                name="time"
                type="time"
                required
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl transition"
          >
            Request Reservation
          </button>

          {submitted && (
            <p role="status" className="text-amber-700 text-center">
              Your form passed browser validation, but no reservation
              has been saved or sent yet.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}