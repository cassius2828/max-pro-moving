import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./output.css";
import { QuoteProvider } from "./Context/QuoteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuoteProvider>
      <App />
    </QuoteProvider>
  </React.StrictMode>
);
