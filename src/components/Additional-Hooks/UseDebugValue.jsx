import React, { useState, useDebugValue } from "react";

function UseDebugValue() {
  const [isOnline, setIsOnline] = useState(false);

  function checkOnlineStatus() {
    useDebugValue(isOnline ? "Online" : "Offline");
    return isOnline;
  }

  return (
    <div>
      <h2 style={{ color: isOnline ? "#00ff00" : "#565656" }}>
        {isOnline ? "Online" : "Offline"}
      </h2>
      <button
        onClick={() => {
          setIsOnline(!isOnline);
        }}
      >
        Switch
      </button>
    </div>
  );
}

export default UseDebugValue;
