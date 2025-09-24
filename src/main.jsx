//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//react
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes"
import { RouterProvider } from "react-router-dom";
import { StoreProvider } from "./hooks/StoreProvider";

//css
import "./index.css";

//pages
import Home from "./pages/Home";

function Main() {
  return (
    <React.StrictMode>
      <StoreProvider>
        <RouterProvider router={router}></RouterProvider>
      </StoreProvider>
    </React.StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
