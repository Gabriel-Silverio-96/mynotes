import { AuthContext } from "provider/authContext";
import React, { useContext, useState } from "react";
import { FiChevronDown, FiUser } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import apiMyNotes from "service/apiMyNotes";
import { ButtonDropdown, Dropdown, DropdownHeaderContainer, DropdownHeaderWrapper } from "./styled";

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

                            <li onClick={logout} role="button">Sair</li>
                        </ul>
                    </Dropdown>
                </DropdownHeaderContainer>
            )}
        </DropdownHeaderWrapper>
    )
}

export default DropdownHeader

