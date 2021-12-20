import React, { useCallback, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "provider/authContext";
import { ContextTheme } from "provider/theme";
import apiMyNotes from "service/apiMyNotes";
import useThemeStorage from "util/useThemeStorage";
import dark from "assets/styles/themes/dark";
import light from "assets/styles/themes/light";

import { FiUser, FiChevronDown, FiMoon, FiSun } from "react-icons/fi";
import { DropdownHeaderContainer, DropdownHeaderWrapper, ButtonDropdown, Dropdown } from "./styled";

const DropdownHeader: React.FC = () => {
    const history = useHistory();
    const { setAuthenticated } = useContext(AuthContext);
    const { themeContext } = useContext(ContextTheme);
        
    const [isActiveDropDown, setIsActiveDropDown] = useState<boolean>(false);

    const toogleDropdown = () => {
        setIsActiveDropDown(prevState => !prevState);
    }

    const logout = () => {
        setAuthenticated(false);
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        apiMyNotes.defaults.headers!.Authorization = "";
        history.push("/")
    }

    const [theme, setTheme] = useThemeStorage("theme", dark);
    const toggleTheme = useCallback(() => {
        setTheme(theme.title === "light" ? dark : light);
    }, [theme, setTheme])

    return (
        <DropdownHeaderWrapper
            className={isActiveDropDown ? "active-dropdown" : "dropdown"}
            onClick={toogleDropdown}
        >
            <ButtonDropdown role="button" zIndex={isActiveDropDown}>
                <div>
                    <FiUser color="#fff" size={20} />
                </div>
                <span></span>
                <FiChevronDown color="#fff" size={20} className="arrow-chevron" />
            </ButtonDropdown>

            {isActiveDropDown && (
                <DropdownHeaderContainer>
                    <Dropdown>
                        <ul>
                            <li role="button">
                                <Link to="profile">
                                    My profile
                                </Link>
                            </li>

                            <li role="button" onClick={toggleTheme} className="option-responsive">
                               {themeContext.title === "dark" ? (
                                   <span><FiMoon /> Dark</span>
                               ) : (
                                    <span><FiSun /> Light</span>
                               )}                               
                            </li>

                            <li onClick={logout} role="button">Sair</li>
                        </ul>
                    </Dropdown>
                </DropdownHeaderContainer>
            )}
        </DropdownHeaderWrapper>
    )
}

export default DropdownHeader

