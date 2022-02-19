import Button from "components/Button";
import DropdownHeader from "components/DropdownHeader";
import { IHeader } from "components/Header/types";
import Logo from "components/Logo";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styled";

const HeaderView: React.FC<any> = (props) => {
    const { authenticated, toggleTheme, theme } = props;
    return (
        <HeaderContainer>
            <Link to={authenticated ? "/mynotes" : "/"}>
                <Logo themeTitle={theme.title} responsive />
            </Link>

            <nav>
                {authenticated && document.location.pathname !== "/" ? (
                    <>                       
                        <Button onClick={toggleTheme} className="switch-theme" iconButton={
                            theme.title === "dark"
                                ? <FiSun size={17.5} />
                                : <FiMoon size={17.5} />
                        } />
                        <DropdownHeader toggleTheme={toggleTheme} />
                    </>
                ) : (
                    <>
                        <Link to="/auth/login">
                            <Button
                                variant="text"
                                title="Login"
                            />
                        </Link>
                        <Link to="/auth/create-account">
                            <Button
                                title="Create account"
                            />
                        </Link>
                        <Button onClick={toggleTheme} className="switch-theme" iconButton={
                            theme.title === "dark"
                                ? <FiSun size={17.5} />
                                : <FiMoon size={17.5} />
                        } />
                    </>
                )}
            </nav>
        </HeaderContainer>
    )
}

export default HeaderView;