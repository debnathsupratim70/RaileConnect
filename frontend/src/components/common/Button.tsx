import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "rounded-lg px-6 py-3 font-semibold transition duration-200";

  const styles =
    variant === "primary"
      ? "bg-blue-700 text-white hover:bg-blue-800"
      : "border border-blue-700 text-blue-700 hover:bg-blue-50";

  return (
    <button
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;