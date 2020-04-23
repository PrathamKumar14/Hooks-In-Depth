import React from "react";
import UseState from "./components/Basic-Hooks/UseState";
import UseEffect from "./components/Basic-Hooks/UseEffect";
import UseContext from "./components/Basic-Hooks/UseContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        <u>Hooks In depth</u>
      </h1>
      <hr />
      <h2>useState Example</h2>
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseContext />
      <hr />
    </div>
  );
}
