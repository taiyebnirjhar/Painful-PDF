import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AppContextProvider from "./context/app.context.tsx";
import "./index.css";
import { Providers } from "./redux/Provide.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Providers>
  </React.StrictMode>
);
