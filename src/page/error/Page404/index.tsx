import React from "react";
import Button from "components/Button";
import Layout from "components/Layout";

import { Page404Container } from "./styled";
import { useHistory } from "react-router-dom";

const Page404: React.FC = () => {
    const history = useHistory();
    const back = () => {
        history.goBack();
    }
    
    return (
        <Layout themeSwitch={false}>
            <Page404Container>
                <h1>Error 404</h1>
                <p>The page your are trying to reach doesn't exist</p>
                <Button title="Back" onClick={back}/>
            </Page404Container>
        </Layout>
    )
}

export default Page404;