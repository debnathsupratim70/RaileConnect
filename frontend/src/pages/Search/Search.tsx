import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");
  const travelClass = searchParams.get("class");

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">
        Search Results
      </h1>

      <div className="rounded-xl border bg-white p-6 shadow">
        <p><strong>From:</strong> {from}</p>
        <p><strong>To:</strong> {to}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Class:</strong> {travelClass}</p>
      </div>
    </div>
  );
}

export default Search;