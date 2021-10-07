import React from "react";
import { Link } from "react-router-dom";

//Components
import Header from "components/Header";

//Assets
import { Main } from "./styled";
import { ButtonPrimary } from "components/UI/Button";
import Background from "assets/images/background.png";
import Layout from "components/Layout";

const HomePagePublic: React.FC = () => {
    return (
        <Layout>
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
        </Layout>
    )
}

export default HomePagePublic;