import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../common/Card";
import Container from "../common/Container";

import StationInput from "./StationInput";
import DateInput from "./DateInput";
import ClassSelect from "./ClassSelect";
import SearchButton from "./SearchButton";

interface SearchFormProps {
  initialFrom?: string;
  initialTo?: string;
  initialDate?: string;
  initialClass?: string;
  embedded?: boolean;
}

function SearchForm({
  initialFrom = "",
  initialTo = "",
  initialDate,
  initialClass = "SL",
  embedded = false,
}: SearchFormProps) {
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);
  const [journeyDate, setJourneyDate] = useState(initialDate || today);
  const [travelClass, setTravelClass] = useState(initialClass);

  useEffect(() => {
    setFrom(initialFrom);
    setTo(initialTo);
    setJourneyDate(initialDate || today);
    setTravelClass(initialClass);
  }, [initialFrom, initialTo, initialDate, initialClass, today]);

  const handleSearch = () => {
    if (!from.trim() || !to.trim()) {
      alert("Please enter both source and destination stations.");
      return;
    }

    navigate(
      `/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(
        to
      )}&date=${journeyDate}&class=${encodeURIComponent(travelClass)}`
    );
  };

  return (
    <section
      className={
        embedded
          ? "py-8"
          : "relative -z-10 -mt-10"
      }
    >
      <Container>
        <Card>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            <StationInput
              label="From"
              value={from}
              placeholder="Enter source station"
              onChange={setFrom}
            />

            <StationInput
              label="To"
              value={to}
              placeholder="Enter destination station"
              onChange={setTo}
            />

            <DateInput
              value={journeyDate}
              onChange={setJourneyDate}
            />

            <ClassSelect
              value={travelClass}
              onChange={setTravelClass}
            />

            <SearchButton
              onClick={handleSearch}
            />
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default SearchForm;