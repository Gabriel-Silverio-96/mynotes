import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "provider/authContext";
import { ContextGlobalProps } from "provider/types";

//Assets
import LogoLight from "assets/images/logo-mynotes-light.svg";
import LogoDark from "assets/images/logo-mynotes-dark.svg";

//Components
import { FiSun, FiMoon, FiTrash2 } from "react-icons/fi";
import Button from "components/Button";
import { ContextGlobal } from "provider/context";
import DropdownHeader from "components/DropdownHeader";

import { HeaderContainer } from "./styled";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = React.memo(({ toggleTheme, themeTitle, thereAreNotes, showModalDeleteAllNote, isActiveNav }) => {
    const { setModalState, setModalViewEditNote, modalState } = useContext<ContextGlobalProps>(ContextGlobal);
    const { authenticated } = useContext(AuthContext);

    const showModal = () => {
        setModalState(!modalState);
        setModalViewEditNote(false);
    }

    return (
        <HeaderContainer>
            <Link to={authenticated ? "/mynotes" : "/"}>
                <img
                    src={themeTitle === "dark" ? LogoDark : LogoLight}
                    alt="Logo MyNotes"
                />
            </Link>

            {isActiveNav && (
                <nav>
                    {authenticated && document.location.pathname !== "/" ? (
                        <>
                            <Button 
                                onClick={showModalDeleteAllNote} 
                                disabled={thereAreNotes}
                                variant="delete"
                                iconButton={<FiTrash2 size={17.5}/>}
                            /> 

                            <Button onClick={toggleTheme} iconButton={
                                themeTitle === "dark"
                                    ? <FiSun size={17.5} />
                                    : <FiMoon size={17.5} />
                            } />

                            <Button
                                title="New Note"
                                onClick={showModal}
                            />

                            <DropdownHeader />
                        </>
                    ) : (
                        <>
                            <Link to="auth/login">
                                <Button
                                    variant="text"
                                    title="Login"
                                />
                            </Link>
                            <Link to="auth/create-account">
                                <Button
                                    title="Create account"
                                />
                            </Link>
                        </>
                    )}
                </nav>
            )}
        </HeaderContainer>
    )
})

export default Header;