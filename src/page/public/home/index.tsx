import React from "react";
import { Link } from "react-router-dom";

//Theme
import { ThemeProvider } from "styled-components";
import useThemeStorage from "util/useThemeStorage";
import dark from "assets/styles/themes/dark";
import GlobalStyles from "assets/styles/global";

//Components
import Header from "components/Header";

//Assets
import { Main } from "./styled";
import { ButtonPrimary } from "components/UI/Button";
import Background from "assets/images/background.png";

const HomePagePublic: React.FC = () => {
    const [theme] = useThemeStorage("theme", dark);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header themeTitle="dark" />

            <Main src={Background}>
                <h1>Time to<br /> create new notes</h1>
                <p>Easily and quickly organize your day</p>
                <div>
                    <Link to="create-account">
                        <ButtonPrimary
                            title="Get started"
                        />
                    </Link>
                </div>
            </Main>
        </ThemeProvider>
    )
}

export default HomePagePublic;