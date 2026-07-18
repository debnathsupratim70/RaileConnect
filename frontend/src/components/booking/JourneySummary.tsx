import type { Train, TrainClass } from "../../types/Train";

interface JourneySummaryProps {
  train: Train;
  trainClass: TrainClass;
}

function JourneySummary({
  train,
  trainClass,
}: JourneySummaryProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Journey Summary
      </h2>

      <div className="space-y-4 text-slate-700">
        <div>
          <p className="text-sm text-slate-500">Train</p>
          <p className="font-semibold">
            {train.trainName}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Train Number</p>
          <p>{train.trainNumber}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Route</p>
          <p>
            {train.from} → {train.to}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Journey Duration</p>
          <p>{train.duration}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Travel Class</p>
          <p>
            {trainClass.name} ({trainClass.code})
          </p>
        </div>
      </div>
    </div>
  );
}

export default JourneySummary;