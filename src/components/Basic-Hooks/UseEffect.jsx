import React, { useState, useEffect } from "react";

function UseEffect() {
  const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const timer = setTimeout(setTime(new Date()), 1000);
  //   return () => clearTimeout(timer);
  // }, [time]);

  //Second param is list of dependency that tells run userEffect when that dependencies changed

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default UseEffect;
