interface JourneyInfoProps {
  fromCode: string;
  toCode: string;
  departure: string;
  arrival: string;
  duration: string;
}

function JourneyInfo({
  fromCode,
  toCode,
  departure,
  arrival,
  duration,
}: JourneyInfoProps) {
  return (
    <div className="my-6 flex items-center justify-between">
      <div>
        <p className="text-2xl font-bold">
          {departure}
        </p>

        <p className="text-slate-500">
          {fromCode}
        </p>
      </div>

      <div className="flex-1 px-6 text-center">
        <p className="text-sm text-slate-500">
          {duration}
        </p>

        <div className="my-2 h-[2px] bg-slate-300" />

        <p className="text-sm text-blue-700">
          Direct
        </p>
      </div>

      <div className="text-right">
        <p className="text-2xl font-bold">
          {arrival}
        </p>

        <p className="text-slate-500">
          {toCode}
        </p>
      </div>
    </div>
  );
}

export default JourneyInfo;