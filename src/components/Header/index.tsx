import React from 'react';

//assets
import Logo from "assets/logo-mynotes.svg";

//Style
import { HeaderContainer, BallButtonHeader } from './styled';

interface HeaderProps {
    toggleTheme(): void
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
    return (
        <HeaderContainer>
            <img className="logo" src={Logo} alt="Logo MyNotes" />

            <nav>
                <BallButtonHeader onClick={toggleTheme}>
                    trocar tema
                </BallButtonHeader>
            </nav>
        </HeaderContainer>
    )
}

export default Header;