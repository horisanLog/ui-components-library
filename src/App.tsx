import React from "react";
import "./App.css";
import DefalutButton, { RedButton } from "./components/atoms/Button";

function App() {
  return (
    <div className="App">
      <DefalutButton name="登録" style={{ color: "green" }} />
      <RedButton name="こんにちは" />
    </div>
  );
}

export default App;
