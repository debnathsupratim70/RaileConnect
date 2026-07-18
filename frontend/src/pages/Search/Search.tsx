import { useSearchParams } from "react-router-dom";

import SearchForm from "../../components/search/SearchForm";
import TrainCard from "../../components/train/TrainCard";
import { trains } from "../../data/trains";

function normalizeStationName(value: string) {
  return value
    .toLowerCase()
    .replace(/\bjunction\b/g, "")
    .replace(/\bjn\b/g, "")
    .replace(/\bterminal\b/g, "")
    .replace(/\bterminus\b/g, "")
    .replace(/\bcentral\b/g, "")
    .replace(/\bcantt\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function Search() {
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from") ?? "";
  const to = searchParams.get("to") ?? "";
  const date = searchParams.get("date") ?? "";
  const travelClass = searchParams.get("class") ?? "";

  const searchFrom = normalizeStationName(from);
  const searchTo = normalizeStationName(to);

  const filteredTrains = trains.filter((train) => {
    const trainFrom = normalizeStationName(train.from);
    const trainTo = normalizeStationName(train.to);

    const routeMatches =
      trainFrom === searchFrom &&
      trainTo === searchTo;

    if (!travelClass) {
      return routeMatches;
    }

    const classMatches = train.classes.some(
      (coach) =>
        coach.code.toLowerCase() === travelClass.toLowerCase()
    );

    return routeMatches && classMatches;
  });

  return (
    <>
      <SearchForm
        embedded
        initialFrom={from}
        initialTo={to}
        initialDate={date}
        initialClass={travelClass}
      />

      <div className="mx-auto max-w-6xl px-6 pb-10">
        <div className="mb-6 rounded-xl bg-white p-5 shadow">
          <h2 className="text-2xl font-bold text-slate-800">
            Search Results
          </h2>

          <p className="mt-2 text-slate-600">
            Found{" "}
            <span className="font-semibold">
              {filteredTrains.length}
            </span>{" "}
            train{filteredTrains.length !== 1 ? "s" : ""} from{" "}
            <span className="font-semibold">{from}</span> to{" "}
            <span className="font-semibold">{to}</span>.
          </p>
        </div>

        {filteredTrains.length > 0 ? (
          filteredTrains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))
        ) : (
          <div className="rounded-2xl bg-white p-10 text-center shadow-md">
            <h2 className="text-2xl font-bold text-slate-700">
              🚆 No trains found
            </h2>

            <p className="mt-3 text-slate-500">
              No trains match your selected route and class.
            </p>

            <p className="text-slate-500">
              Try another class or destination.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;