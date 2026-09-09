import { Display } from "./components/Display"; 
import { Button }  from "./components/Button";
import { useState } from "react";

import "./index.css";

function Header({ title, className }: { title: string; className?: string }) {
  console.log(title);
  return <h1 className={className}>{title}</h1>;
}

function App() {
  const [displayValue, setDisplayValue] = useState("0");

  return (
    <>
      {/* propsでtitleを渡して、classNameを渡して、text-2xl font-boldを渡して、計算機という文字を表示してください */}
      <Header className="text-center font-bold mt-15 mb-6" title="計算機" />
      <section id="center">
        <div className="calculator bg-zinc-900 rounded-lg w-[80%] mx-auto p-20">
          <div className="display mb-6">
            <div className="text-white text-4xl font-bold text-center">
              <Display className="Display" value={displayValue} />
            </div>
          </div>
          <div className="buttons grid grid-cols-4 gap-4">
            <Button className="text-white text-4xl font-bold" label="8" onClick={() => setDisplayValue("8")} />
            <Button className="text-white text-4xl font-bold" label="7" onClick={() => setDisplayValue("7")} />
            <Button className="text-white text-4xl font-bold" label="9" onClick={() => setDisplayValue("9")} />
            <Button className="text-white text-4xl font-bold" label="÷" />
            <Button className="text-white text-4xl font-bold" label="4" onClick={() => setDisplayValue("4")} />
            <Button className="text-white text-4xl font-bold" label="5" onClick={() => setDisplayValue("5")} />
            <Button className="text-white text-4xl font-bold" label="6" onClick={() => setDisplayValue("6")} />
            <Button className="text-white text-4xl font-bold" label="×" />
            <Button className="text-white text-4xl font-bold" label="1" onClick={() => setDisplayValue("1")} />
            <Button className="text-white text-4xl font-bold" label="2" onClick={() => setDisplayValue("2")} />
            <Button className="text-white text-4xl font-bold" label="3" onClick={() => setDisplayValue("3")} />
            <Button className="text-white text-4xl font-bold" label="-" />
            <Button className="text-white text-4xl font-bold" label="0" onClick={() => setDisplayValue("0")} />
            <Button className="text-white text-4xl font-bold" label="AC" onClick={() => setDisplayValue("0")} />
            <Button className="text-white text-4xl font-bold" label="=" onClick={() => console.log("equals")} />
            <Button className="text-white text-4xl font-bold" label="+" onClick={() => console.log("plus")} />
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
    </>
  );
}

export default App;
