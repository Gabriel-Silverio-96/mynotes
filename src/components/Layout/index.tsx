import React from "react";

import GlobalStyles from "assets/styles/global";
import { ThemeProvider } from "styled-components";

import dark from "assets/styles/themes/dark";
import { LayoutProps } from "./types";

const Layout: React.FC<LayoutProps> = ({ children, themeStyle }) => {
    return (
        <ThemeProvider theme={themeStyle === undefined ? dark : themeStyle }>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}

export default Layout;