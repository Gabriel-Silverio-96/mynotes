import dark from "assets/styles/themes/dark";
import light from "assets/styles/themes/light";
import { AuthContext } from "provider/authContext";
import React, { useCallback, useContext } from "react";
import useThemeStorage from "common/hooks/useThemeStorage";
import HeaderView from "./HeaderView";

const Header: React.FC = () => {
    const { authenticated } = useContext(AuthContext);   

    const [theme, setTheme] = useThemeStorage("theme", dark);
    const toggleTheme = useCallback(() => {
        setTheme(theme.title === "light" ? dark : light);
    }, [theme, setTheme])

    return <HeaderView {...{ authenticated, toggleTheme, theme }} />
}

export default Header;