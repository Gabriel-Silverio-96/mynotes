import React, { useContext } from "react";

//Assets
import LogoLight from "assets/logo-mynotes-light.svg";
import LogoDark from "assets/logo-mynotes-dark.svg";
import { HeaderContainer } from "./styled";

//Components
import { IconMoon, IconSun, IconTrash } from "components/UI/Icons";
import { ButtonPrimary, ButtonRound } from "components/UI/Button";
import { ContextGlobal } from "provider/context";

import { HeaderProps } from "./types"

const Header: React.FC<HeaderProps> = React.memo(({ toggleTheme, themeTitle, thereAreNotes, showModalDeleteAllNote }) => {
    const { setModalState } = useContext<any>(ContextGlobal);

    const showModal = () => {
        setModalState((prevState: boolean) => !prevState)
    }

    return (
        <HeaderContainer>
            <img
                src={themeTitle === "dark" ? LogoDark : LogoLight}
                alt="Logo MyNotes"
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

                {
                    thereAreNotes && (
                        <ButtonRound deleteButton={true} onClick={showModalDeleteAllNote}>
                            <IconTrash />
                        </ButtonRound>
                    )
                }

                <ButtonPrimary
                    title="New Note"
                    onClick={showModal}
                />

            </nav>
        </HeaderContainer>
    )
})

export default Header;