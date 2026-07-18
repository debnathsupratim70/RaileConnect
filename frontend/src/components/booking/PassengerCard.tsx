import type { ChangeEvent } from "react";

export interface Passenger {
  id: number;
  name: string;
  age: string;
  gender: string;
  berth: string;
}

interface PassengerCardProps {
  index: number;
  passenger: Passenger;
  onChange: (
    id: number,
    field: keyof Omit<Passenger, "id">,
    value: string
  ) => void;
  onRemove: (id: number) => void;
  canRemove: boolean;
}

function PassengerCard({
  index,
  passenger,
  onChange,
  onRemove,
  canRemove,
}: PassengerCardProps) {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    onChange(
      passenger.id,
      e.target.name as keyof Omit<Passenger, "id">,
      e.target.value
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-slate-800">
          Passenger {index + 1}
        </h3>

        {canRemove && (
          <button
            type="button"
            onClick={() => onRemove(passenger.id)}
            className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
          >
            Remove
          </button>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <input
            name="name"
            value={passenger.name}
            onChange={handleInputChange}
            placeholder="Enter passenger name"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Age
          </label>

          <input
            type="number"
            name="age"
            value={passenger.age}
            onChange={handleInputChange}
            placeholder="Age"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Gender
          </label>

          <select
            name="gender"
            value={passenger.gender}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Berth Preference
          </label>

          <select
            name="berth"
            value={passenger.berth}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          >
            <option value="">No Preference</option>
            <option>Lower</option>
            <option>Middle</option>
            <option>Upper</option>
            <option>Side Lower</option>
            <option>Side Upper</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PassengerCard;