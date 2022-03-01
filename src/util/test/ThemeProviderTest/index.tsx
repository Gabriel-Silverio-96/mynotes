import dark from "assets/styles/themes/dark";
import { ContextTheme } from "provider/theme";
import React from "react";
import { ThemeProvider } from "styled-components";

const ThemeProviderTest: React.FC = ({ children }) => {
    return (
        // @ts-ignore
        <ContextTheme.Provider value={{ themeContext: dark }}>
            <ThemeProvider theme={dark}>
                {children}
            </ThemeProvider>
        </ContextTheme.Provider>
    )
}

export default ThemeProviderTest;