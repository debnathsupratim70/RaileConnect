import { useNavigate, useParams } from "react-router-dom";

import type { TrainClass } from "../../types/Train";

interface ClassCardProps {
  trainClass: TrainClass;
}

function ClassCard({ trainClass }: ClassCardProps) {
  const navigate = useNavigate();
  const { trainNumber } = useParams();

  const getStatusConfig = () => {
    switch (trainClass.status) {
      case "AVAILABLE":
        return {
          badge: "bg-green-100 text-green-700",
          button: "bg-green-600 hover:bg-green-700",
          icon: "🟢",
          text: `${trainClass.available} Seats Available`,
        };

      case "RAC":
        return {
          badge: "bg-yellow-100 text-yellow-800",
          button: "bg-yellow-500 hover:bg-yellow-600",
          icon: "🟡",
          text: `RAC ${trainClass.available}`,
        };

      case "WL":
        return {
          badge: "bg-red-100 text-red-700",
          button: "bg-red-600 hover:bg-red-700",
          icon: "🔴",
          text: `Waiting List ${trainClass.available}`,
        };
    }
  };

  const status = getStatusConfig();

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {trainClass.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-slate-500">
            ({trainClass.code})
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${status.badge}`}
        >
          {trainClass.status}
        </span>
      </div>

      <div className="my-6">
        <p className="text-sm text-slate-500">
          Fare
        </p>

        <p className="mt-1 text-4xl font-bold text-slate-900">
          ₹{trainClass.fare}
        </p>
      </div>

      <div
        className={`flex items-center gap-2 rounded-lg px-4 py-3 ${status.badge}`}
      >
        <span>{status.icon}</span>

        <span className="font-medium">
          {status.text}
        </span>
      </div>

      <button
        onClick={() =>
          navigate(
            `/booking/${trainNumber}?class=${trainClass.code}`
          )
        }
        className={`mt-6 w-full rounded-xl py-3 text-lg font-semibold text-white transition-colors duration-200 ${status.button}`}
      >
        Book Now
      </button>
    </div>
  );
}

export default ClassCard;