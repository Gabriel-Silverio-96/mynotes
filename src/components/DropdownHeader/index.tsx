import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "provider/authContext";
import { ContextTheme } from "provider/theme";
import apiMyNotes from "service/apiMyNotes";

import { FiUser, FiChevronDown, FiMoon, FiSun } from "react-icons/fi";
import { DropdownHeaderContainer, DropdownHeaderWrapper, ButtonDropdown, Dropdown } from "./styled";
import { DropdownHeaderProps } from "./types";

const DropdownHeader: React.FC<DropdownHeaderProps> = ({ toggleTheme }) => {
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

    return (
        <DropdownHeaderWrapper
            className={isActiveDropDown ? "active-dropdown" : "dropdown"}
            onClick={toogleDropdown}
        >
            <ButtonDropdown role="button" zIndex={isActiveDropDown}>
                <div>
                    <FiUser color="#fff" size={20} />
                </div>
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
                                    <span><FiSun /> Light</span>
                                ) : (
                                    <span><FiMoon /> Dark</span>
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

