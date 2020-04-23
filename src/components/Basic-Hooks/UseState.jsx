import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prevValue => prevValue + 1)}>+</button>
      <button onClick={() => setCount(0)}>RESET</button>
      <button onClick={() => setCount(prevValue => prevValue - 1)}>-</button>
    </div>
  );
}

export default UseState;
