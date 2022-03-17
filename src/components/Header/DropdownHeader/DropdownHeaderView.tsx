import React from "react";
import { FiChevronDown, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ButtonDropdown, Dropdown, DropdownHeaderContainer, DropdownHeaderWrapper } from "./styled";
import { IDropdownHeader } from "./types/types.component";

const DropdownHeaderView: React.FC<IDropdownHeader> = (props) => {
    const { toogleDropdown, logout, isActiveDropDown } = props;
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
                    <Dropdown data-testid="dropdown-header">
                        <ul>
                            <li role="button">
                                <Link to="profile">
                                    My profile
                                </Link>
                            </li>

                            <li onClick={logout} role="button">Exit</li>
                        </ul>
                    </Dropdown>
                </DropdownHeaderContainer>
            )}
        </DropdownHeaderWrapper>
    )
}

export default DropdownHeaderView;