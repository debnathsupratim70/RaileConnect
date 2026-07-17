interface AvailabilityBadgeProps {
  status: "AVAILABLE" | "RAC" | "WL";
  available: number;
}

function AvailabilityBadge({
  status,
  available,
}: AvailabilityBadgeProps) {
  const config = {
    AVAILABLE: {
      bg: "bg-green-100",
      text: "text-green-700",
      label: `Available ${available}`,
    },
    RAC: {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      label: `RAC ${available}`,
    },
    WL: {
      bg: "bg-red-100",
      text: "text-red-700",
      label: `WL ${available}`,
    },
  };

  const badge = config[status];

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${badge.bg} ${badge.text}`}
    >
      {badge.label}
    </span>
  );
}

export default AvailabilityBadge;