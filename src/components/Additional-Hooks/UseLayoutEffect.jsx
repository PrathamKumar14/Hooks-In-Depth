import React, { useState, useRef, useLayoutEffect } from "react";

function UseLayoutEffect() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const textareaRef = useRef();

  useLayoutEffect(() => {
    setWidth(textareaRef.current.clientWidth);
    setHeight(textareaRef.current.clientHeight);
  }, [width, height]);

  return (
    <div>
      <h3>textarea width {width}px</h3>
      <h3>textarea height {height}px</h3>
      <textarea
        onClick={() => {
          setWidth();
        }}
        ref={textareaRef}
        placeholder="Adjust height and width to update upper params"
      />
    </div>
  );
}

export default UseLayoutEffect;
