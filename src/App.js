import React from "react";
import { useState } from "react";

function App() {
  //array destructuring
  const [luku1, setLuku1] = useState(0);
  const [luku2, setLuku2] = useState(0);
  let [vastaus, setVastaus] = useState(0);

  const luku1Muuttunut = (event) => {
    setLuku1(event.target.value);
  };

  const luku2Muuttunut = (event) => {
    setLuku2(event.target.value);
  };

  //JSX  //angular
  return (
    <div>
      <p>{vastaus}</p>
      <input onChange={(event) => luku1Muuttunut(event)} value={luku1}></input>
      <input onChange={(event) => luku2Muuttunut(event)} value={luku2}></input>
      <button onClick={() => setVastaus(parseInt(luku1) + parseInt(luku2))}>
        +
      </button>
      <button onClick={() => setVastaus(parseInt(luku1) - parseInt(luku2))}>
        -
      </button>
      <button onClick={() => setVastaus(parseInt(luku1) * parseInt(luku2))}>
        *
      </button>
      <button onClick={() => setVastaus(parseInt(luku1) / parseInt(luku2))}>
        /
      </button>
    </div>
  );
}

export default App;
