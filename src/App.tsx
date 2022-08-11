import React from "react";
import "./App.css";
import DefalutButton from "./components/atoms/Button";
import { PrimaryButton } from "./components/atoms/Button/styles";

function App() {
  return (
    <div className="App">
      <DefalutButton name="登録" />
      <PrimaryButton>こんにちは</PrimaryButton>
    </div>
  );
}

export default App;
