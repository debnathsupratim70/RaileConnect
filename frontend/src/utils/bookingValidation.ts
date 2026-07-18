import type { Passenger } from "../components/booking/PassengerCard";

export function validatePassengers(
  passengers: Passenger[]
): string {
  for (const passenger of passengers) {
    if (!passenger.name.trim()) {
      return "Passenger name is required.";
    }

    if (passenger.name.trim().length < 3) {
      return "Passenger name must be at least 3 characters.";
    }

    const age = Number(passenger.age);

    if (!age) {
      return "Passenger age is required.";
    }

    if (age < 1 || age > 125) {
      return "Passenger age must be between 1 and 125.";
    }

    if (!passenger.gender) {
      return "Please select passenger gender.";
    }
  }

  return "";
}

export function validateContact(
  mobile: string,
  email: string
): string {
  if (!/^[6-9]\d{9}$/.test(mobile)) {
    return "Please enter a valid 10-digit mobile number.";
  }

  if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    return "Please enter a valid email address.";
  }

  return "";
}