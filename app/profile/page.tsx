
export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#FFF8F0] px-4 py-12">
      <section className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-green-800">
          My Profile
        </h1>

        <p className="mt-3 text-gray-600">
          Welcome to your Jollof Joy profile.
        </p>

        <div className="mt-8 rounded-2xl bg-green-50 p-6">
          <h2 className="text-xl font-semibold text-green-800">
            Account Information
          </h2>
          <p className="mt-2 text-gray-600">
            Your account information will appear here once authentication
            is connected.
          </p>
        </div>

        <a
          href="/"
          className="mt-6 inline-block rounded-xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
        >
          Back to Home
        </a>
      </section>
    </main>
  );
}
