import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import PassengerForm from "../../components/booking/PassengerForm";
import JourneySummary from "../../components/booking/JourneySummary";
import FareSummary from "../../components/booking/FareSummary";
import ContactDetails from "../../components/booking/ContactDetails";

import type { Passenger } from "../../components/booking/PassengerCard";
import { trains } from "../../data/trains";

import {
  validatePassengers,
  validateContact,
} from "../../utils/bookingValidation";

function BookingPage() {
  const { trainNumber } = useParams();
  const [searchParams] = useSearchParams();

  const selectedClass = searchParams.get("class");

  const train = trains.find(
    (item) => item.trainNumber === trainNumber
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

  const trainClass = train.classes.find(
    (item) => item.code === selectedClass
  );

  if (!trainClass) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl bg-white p-10 text-center shadow-md">
          <h1 className="text-3xl font-bold text-red-600">
            Invalid Travel Class
          </h1>

          <p className="mt-4 text-slate-500">
            The selected travel class is unavailable.
          </p>
        </div>
      </div>
    );
  }

  // -----------------------------
  // Passenger State
  // -----------------------------

  const [passengers, setPassengers] = useState<Passenger[]>([
    {
      id: 1,
      name: "",
      age: "",
      gender: "",
      berth: "",
    },
  ]);

  // -----------------------------
  // Contact State
  // -----------------------------

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  // -----------------------------
  // Validation Error
  // -----------------------------

  const [error, setError] = useState("");

  // -----------------------------
  // Passenger Handlers
  // -----------------------------

  const handlePassengerChange = (
    id: number,
    field: keyof Omit<Passenger, "id">,
    value: string
  ) => {
    setPassengers((prev) =>
      prev.map((passenger) =>
        passenger.id === id
          ? {
              ...passenger,
              [field]: value,
            }
          : passenger
      )
    );
  };

  const handleAddPassenger = () => {
    setPassengers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        age: "",
        gender: "",
        berth: "",
      },
    ]);
  };

  const handleRemovePassenger = (id: number) => {
    setPassengers((prev) =>
      prev.filter((passenger) => passenger.id !== id)
    );
  };

  // -----------------------------
  // Proceed to Payment
  // -----------------------------

  const handleProceedToPayment = () => {
    const passengerError = validatePassengers(passengers);

    if (passengerError) {
      setError(passengerError);
      return;
    }

    const contactError = validateContact(
      mobile,
      email
    );

    if (contactError) {
      setError(contactError);
      return;
    }

    setError("");

    // Temporary
    alert("Validation Successful! Payment page coming next.");
  };

  // -----------------------------
  // UI
  // -----------------------------

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">
          Passenger Booking
        </h1>

        <p className="mt-2 text-slate-500">
          Complete the passenger details and verify your booking before
          proceeding to payment.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column */}

        <div className="space-y-8 lg:col-span-2">
          <PassengerForm
            passengers={passengers}
            onPassengerChange={handlePassengerChange}
            onAddPassenger={handleAddPassenger}
            onRemovePassenger={handleRemovePassenger}
          />

          <ContactDetails
            mobile={mobile}
            email={email}
            onMobileChange={setMobile}
            onEmailChange={setEmail}
          />
        </div>

        {/* Right Column */}

        <div className="space-y-8">
          <JourneySummary
            train={train}
            trainClass={trainClass}
          />

          <FareSummary
            trainClass={trainClass}
            passengers={passengers}
          />

          {error && (
            <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm font-medium text-red-700">
              {error}
            </div>
          )}

          <button
            onClick={handleProceedToPayment}
            className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;