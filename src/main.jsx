import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import StateProvider from "./provider/StateProvider";
import AuthProvider from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <StateProvider>
        <RouterProvider router={routes} />
      </StateProvider>
    </AuthProvider>
  </StrictMode>
);
