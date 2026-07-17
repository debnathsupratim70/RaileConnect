import { useSearchParams } from "react-router-dom";

import SearchSummary from "../../components/train/SearchSummary";
import TrainCard from "../../components/train/TrainCard";
import { trains } from "../../data/trains";

function Search() {
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from") ?? "";
  const to = searchParams.get("to") ?? "";
  const date = searchParams.get("date") ?? "";
  const travelClass = searchParams.get("class") ?? "";

  const filteredTrains = trains.filter((train) => {
    const routeMatches =
      train.from.toLowerCase() === from.toLowerCase() &&
      train.to.toLowerCase() === to.toLowerCase();

    // If no class is selected, only check the route.
    if (!travelClass) {
      return routeMatches;
    }

    // Check whether this train has the selected class.
    const classMatches = train.classes.some(
      (coach) =>
        coach.code.toLowerCase() === travelClass.toLowerCase()
    );

    return routeMatches && classMatches;
  });

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <SearchSummary
        from={from}
        to={to}
        date={date}
        travelClass={travelClass}
        totalTrains={filteredTrains.length}
      />

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
  );
}

export default Search;