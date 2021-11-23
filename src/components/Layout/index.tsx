import React from "react";

import GlobalStyles from "assets/styles/global";
import { ThemeProvider } from "styled-components";

import dark from "assets/styles/themes/dark";

import SnackBar from "components/SnackBar";
import { LayoutProps } from "./types";

const Layout: React.FC<LayoutProps> = ({ children, themeStyle }) => {
    return (
        <ThemeProvider theme={themeStyle === undefined ? dark : themeStyle }>
            <GlobalStyles />
            <SnackBar typeMessage="success" message="Legal"/>
            {children}
        </ThemeProvider>
    )
}

export default Layout;