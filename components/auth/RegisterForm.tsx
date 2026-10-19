"use client";

export default function RegisterForm() {
  return (
    <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Create Account
      </h1>

      <input
        type="text"
        placeholder="Full Name"
        className="mb-4 w-full rounded-xl border p-4"
      />

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

      <input
        type="password"
        placeholder="Confirm Password"
        className="mb-6 w-full rounded-xl border p-4"
      />

      <button className="w-full rounded-xl bg-green-700 py-4 font-bold text-white">
        Register
      </button>
    </div>
  );
}