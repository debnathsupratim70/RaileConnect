import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import Input from "../common/Input";

function SearchCard() {
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [journeyDate, setJourneyDate] = useState(today);
  const [travelClass, setTravelClass] = useState("Sleeper (SL)");

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
    <section className="relative -mt-10 z-10">
      <Container>
        <Card>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            <Input
              label="From"
              type="text"
              placeholder="Enter source station"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />

            <Input
              label="To"
              type="text"
              placeholder="Enter destination station"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />

            <Input
              label="Journey Date"
              type="date"
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
            />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">
                Class
              </label>

              <select
                value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}
                className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              >
                <option>Sleeper (SL)</option>
                <option>3A</option>
                <option>2A</option>
                <option>1A</option>
                <option>Chair Car (CC)</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button className="w-full" onClick={handleSearch}>
                Search Trains
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default SearchCard;