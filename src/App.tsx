import { Display } from "./components/Display"; // import { useState } from "react";
import { Button }  from "./components/Button";

import "./index.css";

function Header({ title, className }: { title: string; className?: string }) {
  console.log(title);
  return <h1 className={className}>{title}</h1>;
}

function App() {
  return (
    <>
      {/* propsでtitleを渡して、classNameを渡して、text-2xl font-boldを渡して、計算機という文字を表示してください */}
      <Header className="text-center font-bold mt-15" title="計算機" />
      <section id="center">
        <div className="calculator bg-zinc-900 rounded-lg w-[60%] mx-auto p-20">
          <div className="display">
            <div className="text-white text-4xl font-bold">
              <Display value="0" />
            </div>
          </div>
          <div className="buttons flex">
            <Button label="8" />
            <Button label="7" />
            <Button label="9" />
            <Button label="÷" />
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="×" />
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button label="-" />
            <Button label="0" />
            <Button label="AC" />
            <Button label="=" />
            <Button label="+" />
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
