import React from "react";
import UseState from "./components/Basic-Hooks/UseState";
import UseEffect from "./components/Basic-Hooks/UseEffect";
import UseContext from "./components/Basic-Hooks/UseContext";
import UseRef from "./components/Additional-Hooks/UseRef";
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
    </div>
  );
}
