import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HeaderBar from "./components/Header";
import Footer from "./components/Footer";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderBar />
    <App />
    <Footer />
  </React.StrictMode>
);
