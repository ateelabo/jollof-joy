"use client";

import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Welcome Back
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="mb-4 w-full rounded-xl border p-4"
      />

      <input
        type="password"
        placeholder="Password"
        className="mb-4 w-full rounded-xl border p-4"
      />

      <label className="mb-6 flex items-center gap-2">
        <input type="checkbox" />
        Remember me
      </label>

      <button className="w-full rounded-xl bg-green-700 py-4 font-bold text-white">
        Login
      </button>

      <div className="mt-6 flex justify-between text-sm">
        <Link href="/forgot-password">Forgot Password?</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
}