import dark from "assets/styles/themes/dark";
import light from "assets/styles/themes/light";
import Button from "components/Button";
import DropdownHeader from "components/DropdownHeader";
import Logo from "components/Logo";
import { AuthContext } from "provider/authContext";
import React, { useCallback, useContext } from "react";
import { FiMoon, FiSun, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import useThemeStorage from "util/useThemeStorage";
import { HeaderContainer } from "./styled";
import { IHeader } from "./types";

const Header: React.FC<IHeader> = React.memo((props) => {
    const { openDialogCreateNote, thereAreNotes, openDialogDeleteAllNotes, isActiveNav } = props;
    const { authenticated } = useContext(AuthContext);

    const [theme, setTheme] = useThemeStorage("theme", dark);
    const toggleTheme = useCallback(() => {
        setTheme(theme.title === "light" ? dark : light);
    }, [theme, setTheme])

    return (
        <HeaderContainer>
            <Link to={authenticated ? "/mynotes" : "/"}>
                <Logo themeTitle={theme.title} responsive />
            </Link>

            {isActiveNav && (
                <nav>
                    {authenticated && document.location.pathname !== "/" ? (
                        <>
                            <Button
                                onClick={openDialogDeleteAllNotes}
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
                                onClick={openDialogCreateNote}
                            />

                            <DropdownHeader toggleTheme={toggleTheme} />
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