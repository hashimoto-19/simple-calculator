import { Display } from "./components/Display";
import { Button } from "./components/Button.tsx";
import { useState, useEffect } from "react";
import type { Operator } from "./types.ts";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import "./index.css";

import { calculate } from "./utils/calculate.ts";
// 演算ロジックは自分で書く → ヒント: src/電卓ロジックのヒント.md

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const BASE_URL = "https://apis-cloud.net";
  async function getQuote() {
    const response = await fetch(`${BASE_URL}/quotes/random`);
    if (!response.ok) {
      throw new Error("名言の獲得に失敗しました(${response.status})");
    }
    return response.json();
  }
  const [quote, setQuote] = useState<string | null>(null);
  useEffect(() => {
    getQuote().then((data) => {
      setQuote(data.text);
    });
  }, []);

  function pushNumber(digit: string) {
    if (!waitingForOperand && displayValue.length >= 10) {
      return; // 10桁までしか入力できないようにする
    }
    if (waitingForOperand) {
      setDisplayValue(digit === "0" ? "0" : digit);
      setWaitingForOperand(false);
      return;
    }

    setDisplayValue((current) => {
      if (current === "0") {
        return digit === "0" ? "0" : digit;
      }
      return current + digit;
    });
  }

  function chooseoperator(op: Operator) {
    if (
      operator !== null &&
      previousValue !== null &&
      waitingForOperand === false
    ) {
      const result = calculate(previousValue, Number(displayValue), operator);
      setDisplayValue(String(result));
      setPreviousValue(result);
    } else {
      setPreviousValue(Number(displayValue));
    }
    setOperator(op);
    setWaitingForOperand(true);

    console.log("chooseoperator", {
      operator: op,
      previous: Number(displayValue),
      waiting: true,
    });
  }

  function handleEquals() {
    if (operator === null || previousValue === null) {
      return;
    }
    const result = calculate(previousValue, Number(displayValue), operator);
    setDisplayValue(Number.isFinite(result) ? String(result) : "Error");
    setOperator(null);
    setPreviousValue(null);
    setWaitingForOperand(true);
  }

  return (
    <div className="min-h-screen bg-zinc-200">
      <Header
        className="text-center font-bold text-zinc-800 pt-10 pb-4"
        title="計算機"
      />
   
      <section id="center" className="flex justify-center px-4">
        <div className="w-full max-w-[320px] bg-black rounded-[2rem] p-5 shadow-lg">
        <p className="text-white font-bold text-1xl">{quote}</p>
          <div className="mb-6 min-h-[5rem] flex items-end px-2">
            <Display value={displayValue} />
          </div>
          <div className="grid grid-cols-4 gap-3">
            <Button label="7" variant="digit" onClick={() => pushNumber("7")} />
            <Button label="8" variant="digit" onClick={() => pushNumber("8")} />
            <Button label="9" variant="digit" onClick={() => pushNumber("9")} />
            <Button
              label="÷"
              variant="operator"
              onClick={() => chooseoperator("÷")}
            />
            <Button label="4" variant="digit" onClick={() => pushNumber("4")} />
            <Button label="5" variant="digit" onClick={() => pushNumber("5")} />
            <Button label="6" variant="digit" onClick={() => pushNumber("6")} />
            <Button
              label="×"
              variant="operator"
              onClick={() => chooseoperator("×")}
            />
            <Button label="1" variant="digit" onClick={() => pushNumber("1")} />
            <Button label="2" variant="digit" onClick={() => pushNumber("2")} />
            <Button label="3" variant="digit" onClick={() => pushNumber("3")} />
            <Button
              label="−"
              variant="operator"
              onClick={() => chooseoperator("-")}
            />
            <Button label="0" variant="digit" onClick={() => pushNumber("0")} />
            <Button
              label="AC"
              variant="digit"
              onClick={() => {
                setDisplayValue("0");
                setPreviousValue(null);
                setOperator(null);
                setWaitingForOperand(false);
              }}
            />
            <Button label="=" variant="digit" onClick={() => handleEquals()} />
            <Button
              label="+"
              variant="operator"
              onClick={() => chooseoperator("+")}
            />
          </div>
        </div>
      </section>

      <Footer className="text-center py-4 text-zinc-800" />
    </div>
  );
}

export default App;
