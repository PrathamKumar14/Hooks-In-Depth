import React, { useState, useEffect } from "react";

function UseEffect() {
  const [time, setTime] = useState(new Date());

  // useEffect(() => {
  //   const timer = setTimeout(setTime(new Date()), 1000);
  //   return () => clearTimeout(timer);
  // });
  // }, [time]);


  return <h1>{time.toLocaleTimeString()}</h1>;
}

export default UseEffect;
