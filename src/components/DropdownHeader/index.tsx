import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "provider/authContext";
import apiMyNotes from "service/apiMyNotes";

import { FiUser, FiChevronDown } from "react-icons/fi";
import { DropdownHeaderWrapper, ButtonDropdown, Dropdown } from "./styled";

const DropdownHeader: React.FC = () => {
    const history = useHistory();
    const { setAuthenticated } = useContext(AuthContext);
    const [isActiveDropDown, setIsActiveDropDown] = useState<boolean>(false);

    const toogleDropdown = () => {
        setIsActiveDropDown(prevState => !prevState);
    }

    const logout = () => {
        setAuthenticated(false);
        localStorage.removeItem("token");
        apiMyNotes.defaults.headers!.Authorization = "";
        history.push("/")
    }

    return (
        <DropdownHeaderWrapper
            className={isActiveDropDown ? "active-dropdown" : "dropdown"}
            onClick={toogleDropdown}
        >
            <ButtonDropdown role="button">
                <div>
                    <FiUser color="#fff" size={20} />
                </div>
                <span>Gabriel</span>
                <FiChevronDown color="#fff" size={20} className="arrow-chevron" />
            </ButtonDropdown>

            {isActiveDropDown && (
                <Dropdown>
                    <ul>
                        <li role="button">
                            <Link to="profile">
                                My profile
                            </Link>
                        </li>

                        <li onClick={logout} role="button">Sair</li>
                    </ul>
                </Dropdown>
            )}
        </DropdownHeaderWrapper>
    )
}

export default DropdownHeader
