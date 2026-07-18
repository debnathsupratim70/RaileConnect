import type { Station } from "../../types/Station";

import StationItem from "./StationItem";

interface StationDropdownProps {
  stations: Station[];
  highlightedIndex: number;
  onSelect: (station: Station) => void;
}

function StationDropdown({
  stations,
  highlightedIndex,
  onSelect,
}: StationDropdownProps) {
  if (stations.length === 0) {
    return (
      <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-lg border border-slate-200 bg-white shadow-lg">
        <div className="px-4 py-3 text-sm text-slate-500">
          No stations found.
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-72 overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-xl">
      {stations.map((station, index) => (
        <StationItem
          key={station.id}
          station={station}
          isSelected={index === highlightedIndex}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default StationDropdown;