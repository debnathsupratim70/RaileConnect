import PassengerCard, { type Passenger } from "./PassengerCard";

interface PassengerFormProps {
  passengers: Passenger[];
  onPassengerChange: (
    id: number,
    field: keyof Omit<Passenger, "id">,
    value: string
  ) => void;
  onAddPassenger: () => void;
  onRemovePassenger: (id: number) => void;
}

function PassengerForm({
  passengers,
  onPassengerChange,
  onAddPassenger,
  onRemovePassenger,
}: PassengerFormProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">
          Passenger Details
        </h2>

        <button
          type="button"
          onClick={onAddPassenger}
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >
          + Add Passenger
        </button>
      </div>

      <div className="space-y-6">
        {passengers.map((passenger, index) => (
          <PassengerCard
            key={passenger.id}
            index={index}
            passenger={passenger}
            onChange={onPassengerChange}
            onRemove={onRemovePassenger}
            canRemove={passengers.length > 1}
          />
        ))}
      </div>
    </div>
  );
}

export default PassengerForm;