//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { StoreProvider } from "./hooks/StoreProvider";

//css
import "./index.css";

//pages
import Home from "./pages/home";

function Main(){
  return(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router}></RouterProvider>
    </StoreProvider>
  </React.StrictMode>
)}

createRoot(document.getElementById("root")).render(<Main/>) 
