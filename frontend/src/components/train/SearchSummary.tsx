interface SearchSummaryProps {
  from: string;
  to: string;
  date: string;
  travelClass: string;
  totalTrains: number;
}

function SearchSummary({
  from,
  to,
  date,
  travelClass,
  totalTrains,
}: SearchSummaryProps) {
  return (
    <div className="mb-8 rounded-2xl bg-white p-6 shadow-md">
      <button
        className="mb-4 text-sm font-medium text-blue-700 hover:underline"
        onClick={() => window.history.back()}
      >
        ← Modify Search
      </button>

      <h1 className="text-3xl font-bold text-slate-900">
        {from} → {to}
      </h1>

      <p className="mt-2 text-slate-600">
        {date} • {travelClass}
      </p>

      <p className="mt-4 font-semibold text-blue-700">
        Found {totalTrains} trains
      </p>
    </div>
  );
}

export default SearchSummary;