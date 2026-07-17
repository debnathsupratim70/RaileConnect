function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-blue-700 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <h1 className="text-3xl font-bold">
            🚆 RaileConnect
          </h1>

          <div className="space-x-6">
            <button className="font-medium hover:text-blue-200">
              Home
            </button>

            <button className="font-medium hover:text-blue-200">
              Search Train
            </button>

            <button className="font-medium hover:text-blue-200">
              PNR Status
            </button>

            <button className="font-medium hover:text-blue-200">
              Login
            </button>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-8 py-24">
        <h2 className="mb-5 text-6xl font-bold text-blue-700">
          Fast Railway Ticket Booking
        </h2>

        <p className="mb-10 max-w-2xl text-xl text-slate-600">
          Book railway tickets within seconds using RaileConnect.
          Search trains, check seat availability, generate PNR,
          and manage bookings from one platform.
        </p>

        <div className="flex gap-4">
          <button className="rounded-lg bg-blue-700 px-8 py-4 text-white hover:bg-blue-800">
            Search Trains
          </button>

          <button className="rounded-lg border border-blue-700 px-8 py-4 text-blue-700 hover:bg-blue-50">
            Check PNR
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;