import type { TrainClass } from "../../types/Train";
import type { Passenger } from "./PassengerCard";

interface FareSummaryProps {
  trainClass: TrainClass;
  passengers: Passenger[];
}

function FareSummary({
  trainClass,
  passengers,
}: FareSummaryProps) {
  const passengerCount = passengers.length;

  const ticketFare = trainClass.fare * passengerCount;
  const reservationCharge = 40 * passengerCount;
  const gst = Math.round(ticketFare * 0.05);

  const total =
    ticketFare +
    reservationCharge +
    gst;

  return (
    <div className="rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Fare Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>
            Ticket Fare ({passengerCount})
          </span>

          <span>₹{ticketFare}</span>
        </div>

        <div className="flex justify-between">
          <span>
            Reservation Charge
          </span>

          <span>₹{reservationCharge}</span>
        </div>

        <div className="flex justify-between">
          <span>GST (5%)</span>

          <span>₹{gst}</span>
        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold">
          <span>Total</span>

          <span>₹{total}</span>
        </div>
      </div>
    </div>
  );
}

export default FareSummary;