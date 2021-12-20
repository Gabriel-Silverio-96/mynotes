import React, { useContext } from "react";

import GlobalStyles from "assets/styles/global";
import { ThemeProvider } from "styled-components";

import dark from "assets/styles/themes/dark";

import SnackBar from "components/SnackBar";
import { LayoutProps } from "./types";
import { ContextGlobal } from "provider/context";
import { ContextTheme } from "provider/theme";

const Layout: React.FC<LayoutProps> = ({ children, themeSwitch = true }) => {
    const { snackBar } = useContext(ContextGlobal);
    const { themeContext } = useContext(ContextTheme);
    const { isActive, typeMessage, message } = snackBar;
    
    return (        
        <ThemeProvider theme={themeSwitch ? themeContext : dark}>
            <GlobalStyles />
            {isActive && <SnackBar typeMessage={typeMessage} message={message} />}

            {children}
        </ThemeProvider>
    )
}

export default Layout;