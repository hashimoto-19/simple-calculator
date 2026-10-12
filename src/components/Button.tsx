import type { CalculatorButton } from "../types";

type ButtonProps = {
  label: string;
  variant: CalculatorButton;
  className?: string;
  onClick?: () => void;
};

export function Button({ label, variant, className, onClick }: ButtonProps) {
  const colors = {
    digit: "bg-neutral-700 text-white hover:bg-neutral-600",
    operator: "bg-orange-500 text-white hover:bg-orange-400",
  };

  return (
    <button
      type="button"
      className={[
        "aspect-square w-full rounded-full flex items-center justify-center",
        "text-3xl font-medium transition-colors active:opacity-80",
        colors[variant],
        className ?? "",
      ].join(" ")}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
