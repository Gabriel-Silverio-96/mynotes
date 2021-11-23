import React, { useContext } from "react";

import GlobalStyles from "assets/styles/global";
import { ThemeProvider } from "styled-components";

import dark from "assets/styles/themes/dark";

import SnackBar from "components/SnackBar";
import { LayoutProps } from "./types";
import { ContextGlobal } from "provider/context";

const Layout: React.FC<LayoutProps> = ({ children, themeStyle }) => {
    const { snackBar } = useContext(ContextGlobal);
    const { isActive, typeMessage, message } = snackBar;
    
    return (        
        <ThemeProvider theme={themeStyle === undefined ? dark : themeStyle}>
            <GlobalStyles />
            {isActive && <SnackBar typeMessage={typeMessage} message={message} />}

            {children}
        </ThemeProvider>
    )
}

export default Layout;