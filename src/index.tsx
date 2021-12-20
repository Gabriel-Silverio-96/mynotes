import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

import { AuthProvider } from "./provider/authContext";
import { ContextProvider } from "./provider/context";
import { ThemeNameProvider } from "provider/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeNameProvider>
      <AuthProvider>
        <ContextProvider>
          <Routes />
        </ContextProvider>
      </AuthProvider>
    </ThemeNameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);