"use client";

export default function MenuFilter() {
  const categories = [
    "All",
    "Rice",
    "Soup",
    "Grills",
    "Swallows",
    "Drinks",
  ];

  return (
    <section className="py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6">

        <input
          type="text"
          placeholder="Search food..."
          className="w-full max-w-md rounded-full border px-5 py-3 outline-none focus:ring-2 focus:ring-green-700"
        />

        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full bg-green-700 px-6 py-3 text-white transition hover:bg-green-800"
          >
            {category}
          </button>
        ))}

      </div>
    </section>
  );
}