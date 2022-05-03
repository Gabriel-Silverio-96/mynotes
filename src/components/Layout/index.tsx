import GlobalStyles from "assets/styles/global";
import dark from "assets/styles/themes/dark";
import { ISnackBarStore } from "common/types/snackBar";
import SnackBar from "components/SnackBar";
import { ContextTheme } from "provider/theme";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { LayoutProps } from "./types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { themeContext } = useContext(ContextTheme);
	const { snackBar } = useSelector((state: ISnackBarStore) => state);
	const { isOpen, message, type_message } = snackBar;

	return (
		<ThemeProvider theme={themeContext ? themeContext : dark}>
			<GlobalStyles />
			{isOpen && <SnackBar typeMessage={type_message} message={message} align="bottomCenter" />}
			{children}
		</ThemeProvider>
	);
};

export default Layout;