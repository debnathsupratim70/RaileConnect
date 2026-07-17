import Button from "../common/Button";
import JourneyInfo from "./JourneyInfo";
import AvailabilityBadge from "./AvailabilityBadge";

import type { Train } from "../../types/Train";

interface TrainCardProps {
  train: Train;
}

function TrainCard({ train }: TrainCardProps) {
  return (
    <div className="mb-6 rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {train.trainNumber} • {train.trainName}
          </h2>

          <p className="mt-1 text-slate-500">
            {train.from} → {train.to}
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          {train.trainType}
        </span>
      </div>

      {/* Journey */}
      <JourneyInfo
        fromCode={train.fromCode}
        toCode={train.toCode}
        departure={train.departure}
        arrival={train.arrival}
        duration={train.duration}
      />

      {/* Running Days */}
      <div className="mb-6">
        <p className="text-sm text-slate-600">
          <span className="font-semibold">Runs:</span>{" "}
          {train.days.join(", ")}
        </p>
      </div>

      {/* Classes */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Available Classes
        </h3>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {train.classes.map((coach) => (
            <div
              key={coach.code}
              className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-500"
            >
              <div className="mb-3 flex items-center justify-between">
                <h4 className="font-bold text-lg">
                  {coach.code}
                </h4>

                <span className="text-sm font-semibold text-blue-700">
                  ₹{coach.fare}
                </span>
              </div>

              <AvailabilityBadge
                status={coach.status}
                available={coach.available}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end gap-3">
        <Button variant="secondary">
          View Seats
        </Button>

        <Button>
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default TrainCard;