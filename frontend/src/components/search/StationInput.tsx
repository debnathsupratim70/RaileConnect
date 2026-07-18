import { useEffect, useRef } from "react";

import Input from "../common/Input";

import StationDropdown from "./StationDropdown";
import useStationSearch from "./useStationSearch";

import type { Station } from "../../types/Station";

interface StationInputProps {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

function StationInput({
  label,
  value,
  placeholder,
  onChange,
}: StationInputProps) {
  const {
    showDropdown,
    setShowDropdown,
    filteredStations,
    highlightedIndex,
    setHighlightedIndex,
    resetHighlight,
  } = useStationSearch(value);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowDropdown]);

  const handleInputChange = (text: string) => {
    onChange(text);

    if (text.trim()) {
      setShowDropdown(true);
      resetHighlight();
    } else {
      setShowDropdown(false);
    }
  };

  const handleSelect = (station: Station) => {
    onChange(station.name);
    setShowDropdown(false);
    resetHighlight();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (!showDropdown || filteredStations.length === 0) {
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        setHighlightedIndex((previous) =>
          previous >= filteredStations.length - 1
            ? 0
            : previous + 1
        );
        break;

      case "ArrowUp":
        event.preventDefault();

        setHighlightedIndex((previous) =>
          previous <= 0
            ? filteredStations.length - 1
            : previous - 1
        );
        break;

      case "Enter":
        event.preventDefault();

        handleSelect(filteredStations[highlightedIndex]);
        break;

      case "Escape":
        setShowDropdown(false);
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
    >
      <Input
        label={label}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => {
          if (filteredStations.length > 0) {
            setShowDropdown(true);
          }
        }}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />

      {showDropdown && (
        <StationDropdown
          stations={filteredStations}
          highlightedIndex={highlightedIndex}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
}

export default StationInput;