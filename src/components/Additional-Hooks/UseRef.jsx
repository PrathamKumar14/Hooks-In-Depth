import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef();
  const anyInt = useRef(0);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <input type="text" />
      <br />
      <input type="text" />
      <input type="text" />
      <br />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
      <h4>Open console and then press button</h4>
      <button
        onClick={() => {
          console.log(anyInt.current++);
        }}
      >
        +
      </button>
    </div>
  );
}

export default UseRef;
