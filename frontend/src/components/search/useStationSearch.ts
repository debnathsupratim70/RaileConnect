import { useMemo, useState } from "react";

import { stations } from "../../data/stations";
import type { Station } from "../../types/Station";

function useStationSearch(query: string) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const filteredStations = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return [];
    }

    return stations
      .filter(
        (station) =>
          station.name.toLowerCase().includes(value) ||
          station.city.toLowerCase().includes(value) ||
          station.code.toLowerCase().includes(value)
      )
      .slice(0, 8);
  }, [query]);

  const resetHighlight = () => setHighlightedIndex(0);

  return {
    showDropdown,
    setShowDropdown,
    highlightedIndex,
    setHighlightedIndex,
    filteredStations,
    resetHighlight,
  };
}

export default useStationSearch;