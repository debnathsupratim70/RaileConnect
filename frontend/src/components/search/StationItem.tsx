import type { Station } from "../../types/Station";

interface StationItemProps {
  station: Station;
  isSelected: boolean;
  onSelect: (station: Station) => void;
}

function StationItem({
  station,
  isSelected,
  onSelect,
}: StationItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(station)}
      className={`flex w-full flex-col items-start px-4 py-3 text-left transition ${
        isSelected
          ? "bg-blue-100"
          : "hover:bg-slate-100"
      }`}
    >
      <div className="font-semibold text-slate-800">
        🚉 {station.name}
      </div>

      <div className="mt-1 text-sm text-slate-500">
        {station.code} • {station.city}, {station.state}
      </div>
    </button>
  );
}

export default StationItem;