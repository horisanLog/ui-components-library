import * as React from "react";
import ReactDOM from "react-dom/client";
import Alert from './Alert.tsx';

const App = () => {
  return <div style={{ color: "red" }}>Hello, React App!</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

if (root) {
  root.render(
    <React.StrictMode>
      <App />
      <Alert message="Success!" />
    </React.StrictMode>
  );
} else {
  console.log("No root element found");
}
