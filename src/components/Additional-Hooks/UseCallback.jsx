import React, { useState, useCallback } from "react";

function UseCallback() {
  const [count, setCount] = useState(1);

  function fibonacci(count) {
    if (count <= 1) {
      return 1;
    } else {
      return fibonacci(count - 1) + fibonacci(count - 2);
    }
  }

  return (
    <div>
      <h3>
        Fibonacci sum of {count} is {useCallback(fibonacci(count), [count])}
      </h3>
      <button onClick={() => setCount(prevValue => prevValue + 1)}>INC</button>
    </div>
  );
}

export default UseCallback;
