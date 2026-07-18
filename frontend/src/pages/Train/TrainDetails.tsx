import { useParams } from "react-router-dom";

import TrainHeader from "../../components/train/TrainHeader";
import RouteTimeline from "../../components/train/RouteTimeline";
import RunningDays from "../../components/train/RunningDays";
import ClassCard from "../../components/train/ClassCard";

import { trains } from "../../data/trains";

function TrainDetails() {
  const { trainNumber } = useParams();

  const train = trains.find(
    (train) => train.trainNumber === trainNumber
  );

  if (!train) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl bg-white p-10 text-center shadow-md">
          <h1 className="text-3xl font-bold text-red-600">
            🚫 Train Not Found
          </h1>

          <p className="mt-4 text-slate-500">
            The requested train does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <TrainHeader train={train} />

      <RouteTimeline train={train} />

      <RunningDays days={train.days} />

      <section className="rounded-2xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-slate-800">
          Available Classes
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {train.classes.map((trainClass) => (
            <ClassCard
              key={trainClass.code}
              trainClass={trainClass}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TrainDetails;