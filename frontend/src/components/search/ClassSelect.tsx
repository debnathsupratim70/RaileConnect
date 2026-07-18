interface ClassSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const classes = [
  {
    code: "SL",
    name: "Sleeper (SL)",
  },
  {
    code: "3A",
    name: "Third AC (3A)",
  },
  {
    code: "2A",
    name: "Second AC (2A)",
  },
  {
    code: "1A",
    name: "First AC (1A)",
  },
  {
    code: "CC",
    name: "Chair Car (CC)",
  },
];

function ClassSelect({
  value,
  onChange,
}: ClassSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700">
        Class
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
      >
        {classes.map((travelClass) => (
          <option
            key={travelClass.code}
            value={travelClass.code}
          >
            {travelClass.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ClassSelect;