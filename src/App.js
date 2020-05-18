import React from "react";
import UseState from "./components/Basic-Hooks/UseState";
import UseEffect from "./components/Basic-Hooks/UseEffect";
import UseContext from "./components/Basic-Hooks/UseContext";
import UseRef from "./components/Additional-Hooks/UseRef";
import UseReducer from "./components/Additional-Hooks/UseReducer";
import UseCallback from "./components/Additional-Hooks/UseCallback";
import UseLayoutEffect from "./components/Additional-Hooks/UseLayoutEffect";
import UseDebugValue from "./components/Additional-Hooks/UseDebugValue";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        <u>Hooks In depth</u>
      </h1>
      <hr />
      <h2 className="example">useState Example</h2>
      <UseState />
      <hr />
      <h2 className="example">useEffect Example</h2>
      <UseEffect />
      <hr />
      <h2 className="example">useContext Example</h2>
      <UseContext />
      <hr />
      <h2 className="example">useRef Example</h2>
      <UseRef />
      <hr />
      <h2 className="example">useReducer Example</h2>
      <UseReducer />
      <hr />
      <h2 className="example">useCallback Example</h2>
      <UseCallback />
      <hr />
      <h2 className="example">useLayoutEffect Example</h2>
      <UseLayoutEffect />
      <hr />
      <h2 className="example">useDebugValue Example</h2>
      <UseDebugValue />
      <hr />
    </div>
  );
}
