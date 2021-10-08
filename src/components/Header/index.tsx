import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "provider/authContext";
import apiMyNotes from "service/apiMyNotes";

//Assets
import LogoLight from "assets/images/logo-mynotes-light.svg";
import LogoDark from "assets/images/logo-mynotes-dark.svg";
import { HeaderContainer } from "./styled";

//Components
import { IconMoon, IconSun, IconTrash } from "components/UI/Icons";
import { ButtonPrimary, ButtonRound, ButtonNoBackground } from "components/UI/Button";
import { ContextGlobal } from "provider/context";

import { HeaderProps } from "./types"
import { ContextGlobalProps } from "provider/types";

const Header: React.FC<HeaderProps> = React.memo(({ toggleTheme, themeTitle, thereAreNotes, showModalDeleteAllNote }) => {
    const history = useHistory();
    const { setModalState, setModalViewEditNote, modalState } = useContext<ContextGlobalProps>(ContextGlobal);
    const { authenticated, setAuthenticated } = useContext(AuthContext)
    
    const showModal = () => {
        setModalState(!modalState);
        setModalViewEditNote(false);
    }

    const logout = () => {
        setAuthenticated(false);
        localStorage.removeItem("token");
        apiMyNotes.defaults.headers!.Authorization = "";
        history.push("/")
    }

    return (
        <HeaderContainer>
            <img
                src={themeTitle === "dark" ? LogoDark : LogoLight}
                alt="Logo MyNotes"
            />

            <nav>
                {authenticated && document.location.pathname !== "/"  ? (
                    <>
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

                        <p onClick={logout} style={{color: "white"}}>Exit</p>
                    </>
                ) : (
                    <>
                        <Link to="auth/login">
                            <ButtonNoBackground
                                title="Login"
                            />
                        </Link>
                        <Link to="create-account">
                            <ButtonPrimary
                                title="Create account"
                            />
                        </Link>
                    </>
                )}
            </nav>
        </HeaderContainer>
    )
})

export default Header;