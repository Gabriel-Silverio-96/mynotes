import React from "react";
import GlobalStyles from "assets/styles/global";
import { ThemeProvider } from "styled-components";
import useThemeStorage from "util/useThemeStorage";

import dark from "assets/styles/themes/dark";

const Layout: React.FC = ({ children }) => {
    const [theme] = useThemeStorage("theme", dark);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    )
}

export default Layout;