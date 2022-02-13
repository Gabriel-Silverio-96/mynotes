import { ThemeNameProvider } from "provider/theme";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AuthProvider } from "./provider/authContext";
import Routes from "./routes";
import { store } from "common/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeNameProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeNameProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);