function Home() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-24">
      <h2 className="mb-5 text-6xl font-bold text-blue-700">
        Fast Railway Ticket Booking
      </h2>

      <p className="mb-10 max-w-2xl text-xl text-slate-600">
        Book railway tickets within seconds using RaileConnect.
        Search trains, check seat availability,
        generate PNR, and manage bookings from one platform.
      </p>

      <div className="flex gap-4">
        <button className="rounded-lg bg-blue-700 px-8 py-4 text-white hover:bg-blue-800">
          Search Trains
        </button>

        <button className="rounded-lg border border-blue-700 px-8 py-4 text-blue-700 hover:bg-blue-50">
          Check PNR
        </button>
      </div>
    </div>
  );
}

export default Home;