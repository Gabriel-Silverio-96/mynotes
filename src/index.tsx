import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

import { AuthProvider } from "./provider/authContext";
import { ContextProvider } from "./provider/context";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);