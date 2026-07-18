import Input from "../common/Input";

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
}

function DateInput({
  value,
  onChange,
}: DateInputProps) {
  return (
    <Input
      label="Journey Date"
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default DateInput;