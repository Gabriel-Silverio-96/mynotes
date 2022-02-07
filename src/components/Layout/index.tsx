import GlobalStyles from "assets/styles/global";
import dark from "assets/styles/themes/dark";
import { ISnackBarStore } from "common/types/SnackBar";
import SnackBar from "components/SnackBar";
import { ContextTheme } from "provider/theme";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { LayoutProps } from "./types";

const Layout: React.FC<LayoutProps> = ({ children, themeSwitch = true }) => {
    const { themeContext } = useContext(ContextTheme);
    const { snackBar } = useSelector((state: ISnackBarStore) => state);
    const { isOpen, message, type_message } = snackBar;

    return (
        <ThemeProvider theme={themeSwitch ? themeContext : dark}>
            <GlobalStyles />
            {isOpen && <SnackBar typeMessage={type_message} message={message} />}
            {children}
        </ThemeProvider>
    )
}

export default Layout;