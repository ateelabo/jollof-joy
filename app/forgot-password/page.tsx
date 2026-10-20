
"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(
      "Password reset functionality is not connected yet. Please contact the site administrator."
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FFF8F0] px-4 py-12">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-green-800">
          Forgot Password?
        </h1>

        <p className="mt-3 text-gray-600">
          Enter your email address to begin recovering your account.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="mb-2 block font-medium text-gray-700">
              Email address
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-700 px-4 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Reset Password
          </button>
        </form>

        <a
          href="/login"
          className="mt-6 block text-center font-medium text-green-700 hover:underline"
        >
          Back to Login
        </a>
      </section>
    </main>
  );
}
