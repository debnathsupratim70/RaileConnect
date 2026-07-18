interface RunningDaysProps {
  days: string[];
}

function RunningDays({ days }: RunningDaysProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Running Days
      </h2>

      <div className="flex flex-wrap gap-3">
        {days.map((day) => (
          <span
            key={day}
            className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700"
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  );
}

export default RunningDays;