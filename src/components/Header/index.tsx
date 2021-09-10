import React from "react";

//Assets
import LogoLight from "assets/logo-mynotes-light.svg";
import LogoDark from "assets/logo-mynotes-dark.svg";
import { HeaderContainer } from "./styled";

//Components
import { IconMoon, IconSun } from "components/UI/Icons";
import { ButtonPrimary, ButtonRound } from "components/UI/Button";

interface HeaderProps {
    toggleTheme(): void,
    themeTitle: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, themeTitle }) => {

    return (
        <HeaderContainer>
            <img
                src={themeTitle === "dark" ? LogoDark : LogoLight}
                alt="Logo MyNotes"
                role="img"
            />

            <nav>
                <ButtonRound
                    onClick={toggleTheme}
                >
                    {
                        themeTitle === "dark"
                            ? <IconSun />
                            : <IconMoon />
                    }
                </ButtonRound>
                <ButtonPrimary
                    title="New Note"
                />

            </nav>
        </HeaderContainer>
    )
}

export default Header;