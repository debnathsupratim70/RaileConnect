import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Input({
  label,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        className={`rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200 ${className}`}
        {...props}
      />
    </div>
  );
}

export default Input;