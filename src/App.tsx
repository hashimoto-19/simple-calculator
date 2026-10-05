import { Display } from "./components/Display";
import { Button } from "./components/Button.tsx";
import { useState } from "react";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import "./index.css";
import Social from "./components/Social.tsx";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
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
      <Social />
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
              label="8"
              onClick={() => pushNumber("8")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="7"
              onClick={() => pushNumber("7")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="9"
              onClick={() => pushNumber("9")}
            />
            <Button className="text-white text-4xl font-bold" label="÷" />
            <Button
              className="text-white text-4xl font-bold"
              label="4"
              onClick={() => pushNumber("4")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="5"
              onClick={() => pushNumber("5")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="6"
              onClick={() => pushNumber("6")}
            />
            <Button className="text-white text-4xl font-bold" label="×" />
            <Button
              className="text-white text-4xl font-bold"
              label="1"
              onClick={() => pushNumber("1")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="2"
              onClick={() => pushNumber("2")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="3"
              onClick={() => pushNumber("3")}
            />
            <Button className="text-white text-4xl font-bold" label="-" />
            <Button
              className="text-white text-4xl font-bold"
              label="0"
              onClick={() => pushNumber("0")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="AC"
              onClick={() => pushNumber("0")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="="
              onClick={() => console.log("equals")}
            />
            <Button
              className="text-white text-4xl font-bold"
              label="+"
              onClick={() => console.log("plus")}
            />
          </div>
        </div>
        {/* <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}
      </section>
      <Footer className="text-center mt-10 py-4 text-zinc-800" />
    </>
  );
}

export default App;
