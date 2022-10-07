import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import EazyTheme from "./EazyTheme";
import App from "./App";
import "@fontsource/poppins";
import "@fontsource/merriweather";
import HeaderBar from "./components/Header";
import Footer from "./components/Footer";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={EazyTheme} withGlobalStyles withNormalizeCSS>
      <HeaderBar />
      <App />
      <Footer />
    </MantineProvider>
  </React.StrictMode>
);
