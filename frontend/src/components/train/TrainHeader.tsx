import type { Train } from "../../types/Train";

interface TrainHeaderProps {
  train: Train;
}

function TrainHeader({ train }: TrainHeaderProps) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-white p-8 shadow-md md:flex-row md:items-start md:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <span className="text-4xl">🚄</span>

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              {train.trainName}
            </h1>

            <p className="mt-1 text-lg text-slate-500">
              {train.trainNumber}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {train.trainType}
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
            {train.fromCode} → {train.toCode}
          </span>
        </div>
      </div>

      <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4">
        <p className="text-sm text-slate-500">
          Journey Duration
        </p>

        <p className="mt-1 text-2xl font-bold text-green-700">
          {train.duration}
        </p>
      </div>
    </div>
  );
}

export default TrainHeader;