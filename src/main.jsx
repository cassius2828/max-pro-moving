import React from "react";
import ReactDOM from "react-dom/client";

import "./output.css";
import { QuoteProvider } from "./Context/QuoteContext.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TermsOfService from "./pages/terms.jsx";
import PrivacyPolicy from "./pages/privacyPolicy.jsx";
import About from "./pages/about.jsx";
import License from "./pages/license.jsx";
import Main from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuoteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/license" element={<License />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </QuoteProvider>
  </React.StrictMode>
);
