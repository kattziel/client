import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// app has access to context and router
