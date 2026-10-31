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
  const [quote, setQuote] = useState<string>("");
  useEffect(() => {
    getQuote().then((data) => {
      setQuote(data.text);
    });
  }, []);

  function pushNumber(digit: string) {
    if (waitingForOperand === false && displayValue.length >= 10) {
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

  // 演算子ボタン（+ − × ÷）を押したとき
  // 例: 1 → + → 2 → + の「2つ目の +」では、先に 1+2 を計算してから次の演算子を覚える
  function chooseoperator(op: Operator) {
    // 【連続計算できるとき】すでに演算子と左辺があり、かつ今の表示は「右辺の入力中」
    // （waitingForOperand が true だと「演算子を押し直しただけ」なので、ここでは計算しない）
    if (
      operator !== null &&
      previousValue !== null &&
      waitingForOperand === false
    ) {
      // 左辺 previousValue と、画面の右辺 displayValue を、前の演算子で計算
      const result = calculate(previousValue, Number(displayValue), operator);
      setDisplayValue(String(result)); // 途中結果を画面に出す（1+2+ の時点で 3 と出る）
      setPreviousValue(result); // その結果を、次の計算の左辺にする
    } else {
      // 【初めて演算子を押したとき】今の画面の数字を左辺として覚える
      setPreviousValue(Number(displayValue));
    }
    setOperator(op); // 今回押された演算子（+ や × など）を覚える
    setWaitingForOperand(true); // 次の数字入力は「上書き」するフラグ（12 にならないように）

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

  function backspace() {
    if (waitingForOperand) {
      return;
    }
    setDisplayValue((current) => {
      if (current.length <= 1) {
        return "0";
      }
      return current.slice(0, -1);
    });
  }

  return (
    <div className="min-h-screen bg-zinc-200">
      <Header
        className="text-center font-bold text-zinc-800 pt-10 pb-4"
        title="計算機"
      />

      <section id="center" className="flex justify-center px-4">
        <div className="w-full max-w-[320px] bg-black rounded-[2rem] p-5 shadow-lg">
          <p className="text-white font-bold text-1xl">
            名言：
            {quote}
          </p>
          <div className="mb-6 min-h-[5rem] flex items-end px-2">
            <Display value={displayValue} />
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-2"></div>
            <Button
              label="⌫"
              variant="digit"
              className="col-span-2 !aspect-auto h-16"
              onClick={backspace}
            />
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
