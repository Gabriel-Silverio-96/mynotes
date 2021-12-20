import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "provider/authContext";
import { ContextGlobalProps } from "provider/types";

import light from "assets/styles/themes/light";
import dark from "assets/styles/themes/dark";

//Components
import Logo from "components/Logo";
import { FiSun, FiMoon, FiTrash2 } from "react-icons/fi";
import Button from "components/Button";
import { ContextGlobal } from "provider/context";
import DropdownHeader from "components/DropdownHeader";

import { HeaderContainer } from "./styled";
import { HeaderProps } from "./types";
import useThemeStorage from "util/useThemeStorage";

const Header: React.FC<HeaderProps> = React.memo(({ themeTitle, thereAreNotes, showModalDeleteAllNote, isActiveNav }) => {
    const { setModalState, setModalViewEditNote, modalState } = useContext<ContextGlobalProps>(ContextGlobal);
    const { authenticated } = useContext(AuthContext);

    const showModal = () => {
        setModalState(!modalState);
        setModalViewEditNote(false);
    }

    const [theme, setTheme] = useThemeStorage("theme", dark);
    const toggleTheme = useCallback(() => {
        setTheme(theme.title === "light" ? dark : light);
    }, [theme, setTheme])

    return (
        <HeaderContainer>
            <Link to={authenticated ? "/mynotes" : "/"}>
                <Logo themeTitle={theme.title} responsive/>
            </Link>

            {isActiveNav && (
                <nav>
                    {authenticated && document.location.pathname !== "/" ? (
                        <>
                            <Button
                                onClick={showModalDeleteAllNote}
                                disabled={thereAreNotes}
                                variant="delete"
                                iconButton={<FiTrash2 size={17.5} />}
                            />

                            <Button onClick={toggleTheme} className="switch-theme" iconButton={
                                theme.title === "dark"
                                    ? <FiSun size={17.5} />
                                    : <FiMoon size={17.5} />
                            } />

                            <Button
                                title="New Note"
                                onClick={showModal}
                            />

                            <DropdownHeader toggleTheme={toggleTheme}/>
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