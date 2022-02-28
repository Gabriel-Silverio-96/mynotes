import dark from "assets/styles/themes/dark";
import React from "react";
import { ThemeProvider } from "styled-components";

const ThemeProviderTest: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={dark}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeProviderTest;