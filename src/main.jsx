import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";   // ✅ import router
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>   {/*  wrap App inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);