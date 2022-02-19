import { ThemeNameProvider } from "provider/theme";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AuthProvider } from "./provider/authContext";
import Routes from "./routes";
import { store } from "common/store";
import Layout from "components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeNameProvider>
        <AuthProvider>
          <Layout>
            <Routes />
          </Layout>
        </AuthProvider>
      </ThemeNameProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);