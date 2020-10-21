import React from "react";
import { useState } from "react";

function App() {
  let [naytto, setNaytto] = useState("");

  // eval käyttö on huono tapa...

  return (
    <div>
      <div>
        <input value={naytto}></input>
        <div>
          <button onClick={() => setNaytto(naytto + "7")}>7</button>
          <button onClick={() => setNaytto(naytto + "8")}>8</button>
          <button onClick={() => setNaytto(naytto + "9")}>9</button>
          <button onClick={() => setNaytto(naytto + "/")}>/</button>
        </div>
        <div>
          <button onClick={() => setNaytto(naytto + "4")}>4</button>
          <button onClick={() => setNaytto(naytto + "5")}>5</button>
          <button onClick={() => setNaytto(naytto + "6")}>6</button>
          <button onClick={() => setNaytto(naytto + "*")}>*</button>
        </div>
        <div>
          <button onClick={() => setNaytto(naytto + "1")}>1</button>
          <button onClick={() => setNaytto(naytto + "2")}>2</button>
          <button onClick={() => setNaytto(naytto + "3")}>3</button>
          <button onClick={() => setNaytto(naytto + "-")}>-</button>
        </div>
        <div>
          <button onClick={() => setNaytto(naytto + "0")}>0</button>
          <button onClick={() => setNaytto((naytto = ""))}>C</button>
          <button onClick={() => setNaytto((naytto = eval(naytto)))}>=</button>
          <button onClick={() => setNaytto(naytto + "+")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
