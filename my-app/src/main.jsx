//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//css
import "./index.css";

//pages
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
