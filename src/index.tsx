import { store } from "common/store";
import Layout from "components/Layout";
import { createBrowserHistory } from "history";
import { ThemeNameProvider } from "provider/theme";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import setupInterceptors from "service/setupInterceptors";
import { AuthProvider } from "./provider/authContext";
import Routes from "./routes";

const history = createBrowserHistory();
setupInterceptors(history, store);

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