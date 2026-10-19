export default function MenuHero() {
  return (
    <section className="relative h-[45vh] bg-[url('/gallery/jollof.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl font-bold">
          Our Delicious Menu
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-200">
          Explore authentic Nigerian dishes prepared with fresh ingredients and traditional recipes.
        </p>
      </div>
    </section>
  );
}