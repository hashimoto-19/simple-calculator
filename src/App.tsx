import { Display } from "./components/Display";
import { Button } from "./components/Button.tsx";
import { useState } from "react";
import type { Operator } from "./types.ts";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import "./index.css";
import Social from "./components/Social.tsx";

// 演算ロジックは自分で書く → ヒント: src/電卓ロジックのヒント.md

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  
  function pushNumber(digit: string) {
    setDisplayValue((current) => {
      if (current === "0") {
        return digit === "0" ? "0" : digit;
      }
      return current + digit;
    });
  }
  return (
    <>
      <Header className="text-center font-bold mt-15 mb-6" title="計算機" />
      <section id="center">
        <div className="calculator bg-zinc-900 rounded-lg w-[80%] mx-auto p-20">
          <div className="display mb-6">
            <div className="text-white text-4xl font-bold text-center">
              <Display className="Display" value={displayValue} />
            </div>
          </div>
          <div className="buttons grid grid-cols-4 gap-4">
            <Button
              className="text-white text-4xl font-bold"
              label="7"
              variant="digit"
              onClick={() => pushNumber("7")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="8"
              variant="digit"
              onClick={() => pushNumber("8")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="9"
              variant="digit"
              onClick={() => pushNumber("9")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="÷"
              variant="operator"
              onClick={() => console.log("divide")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="4"
              variant="digit"
              onClick={() => pushNumber("4")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="5"
              variant="digit"
              onClick={() => pushNumber("5")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="6"
              variant="digit"
              onClick={() => pushNumber("6")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="×"
              variant="operator"
              onClick={() => console.log("multiply")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="1"
              variant="digit"
              onClick={() => pushNumber("1")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="2"
              variant="digit"
              onClick={() => pushNumber("2")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="3"
              variant="digit"
              onClick={() => pushNumber("3")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="-"
              variant="operator"
              onClick={() => console.log("subtract")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="0"
              variant="digit"
              onClick={() => pushNumber("0")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="AC"
              variant="digit"
              onClick={() => setDisplayValue("0")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="="
              variant="digit"
              onClick={() => console.log("equals")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="+"
              variant="operator"
              onClick={() => console.log("plus")}
            />
          </div>
        </div>
      </section>
      <Social />
      <Footer className="text-center mt-10 py-4 text-zinc-800" />
    </>
  );
}

export default App;
