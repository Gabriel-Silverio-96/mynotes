import dark from "assets/styles/themes/dark";
import { ContextTheme } from "provider/theme";
import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const ThemeProviderTest: React.FC<{ theme?: DefaultTheme }> = ({ children, theme }) => {
    return (
        // @ts-ignore
        <ContextTheme.Provider value={{ themeContext: dark }}>
            <ThemeProvider theme={theme ? theme : dark}>
                {children}
            </ThemeProvider>
        </ContextTheme.Provider>
    )
}

export default ThemeProviderTest;