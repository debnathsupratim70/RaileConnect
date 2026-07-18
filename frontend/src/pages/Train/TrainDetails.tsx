import { useParams } from "react-router-dom";

function TrainDetails() {
  const { trainNumber } = useParams();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-2xl bg-white p-8 shadow-md">
        <h1 className="text-3xl font-bold text-slate-800">
          🚆 Train Details
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Train Number:
          <span className="ml-2 font-semibold">
            {trainNumber}
          </span>
        </p>

        <p className="mt-6 text-slate-500">
          Detailed train information will appear here in the next phase.
        </p>
      </div>
    </div>
  );
}

export default TrainDetails;