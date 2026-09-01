// import { useState } from "react";
import "./index.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div>
          <h1 className="text-2xl font-bold">計算機</h1>
        </div>
        <div className="calculator bg-zinc-900 rounded-lg w-[60%] mx-auto p-20">
          <div className="display">
            <div className="text-white text-4xl font-bold">display</div>
          </div>
          <div className="buttons">
            <div className="button">7</div>
            <div className="button">8</div>
            <div className="button">9</div>
            <div className="button">÷</div>
            <div className="button">4</div>
            <div className="button">5</div>
            <div className="button">6</div>
            <div className="button">×</div>
            <div className="button">1</div>
            <div className="button">2</div>
            <div className="button">3</div>
            <div className="button">-</div>
            <div className="button">0</div>
            <div className="button">AC</div>
            <div className="button">=</div>
            <div className="button">+</div>
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
