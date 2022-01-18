import Background from "assets/images/background.png";
import Button from "components/Button";
import Header from "components/Header";
import Layout from "components/Layout";
import React from "react";
import { Link } from "react-router-dom";
import { Main } from "./styled";

export default function HomeView() {
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