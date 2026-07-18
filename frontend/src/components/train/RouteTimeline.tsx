import type { Train } from "../../types/Train";

interface RouteTimelineProps {
  train: Train;
}

function RouteTimeline({ train }: RouteTimelineProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-8 text-2xl font-bold text-slate-800">
        Journey
      </h2>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* Departure */}
        <div>
          <p className="text-3xl font-bold text-slate-900">
            {train.departure}
          </p>

          <p className="mt-2 text-lg font-semibold text-slate-700">
            {train.from}
          </p>

          <p className="text-sm text-slate-500">
            {train.fromCode}
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full bg-blue-600" />

            <div className="h-1 w-36 bg-blue-600 md:w-56" />

            <div className="h-4 w-4 rounded-full bg-blue-600" />
          </div>

          <p className="mt-3 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
            {train.duration}
          </p>
        </div>

        {/* Arrival */}
        <div className="text-right">
          <p className="text-3xl font-bold text-slate-900">
            {train.arrival}
          </p>

          <p className="mt-2 text-lg font-semibold text-slate-700">
            {train.to}
          </p>

          <p className="text-sm text-slate-500">
            {train.toCode}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RouteTimeline;