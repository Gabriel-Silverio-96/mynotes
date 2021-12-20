import React from "react";
import { Link, useHistory } from "react-router-dom";

//Components
import Header from "components/Header";

//Assets
import { Main } from "./styled";
import Button from "components/Button";
import Background from "assets/images/background.png";
import Layout from "components/Layout";

const HomePagePublic: React.FC = () => {
    const history = useHistory();
    const sessionUser = () => {
        const path = document.location.pathname === "/";
        const token = localStorage.getItem("token");
        if (path && token) {
            history.push("/mynotes")
        }
    }
    sessionUser()

    return (
        <Layout themeSwitch={false}>
            <Header themeTitle="dark" isActiveNav={true} />
            <Main src={Background}>
                <h1>Time to<br /> create new notes</h1>
                <p>Easily and quickly organize your day</p>
                <div>
                    <Link to="auth/create-account">
                        <Button size="large"
                            title="Get started"
                        />
                    </Link>
                </div>
            </Main>
        </Layout>
    )
}

export default HomePagePublic;