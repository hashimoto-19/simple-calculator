import type { Operator } from "../types";

export function calculate(a: number, b: number, operator: Operator): number {
  // ここに分岐
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return a / b;
    default:
      throw new Error("Invalid operator");
  }
}
