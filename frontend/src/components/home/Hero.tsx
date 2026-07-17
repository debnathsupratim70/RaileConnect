function Hero() {
  return (
    <section className="bg-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-8 py-20 text-center">

        <span className="mb-4 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          🚆 Welcome to RaileConnect
        </span>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
          Book Railway Tickets
          <span className="text-blue-700"> Faster</span> and
          <span className="text-blue-700"> Smarter</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Search trains, check seat availability, book tickets,
          track your PNR status, and manage your journeys from one
          modern railway booking platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-lg bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800">
            Search Trains
          </button>

          <button className="rounded-lg border border-blue-700 px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-50">
            Check PNR
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;