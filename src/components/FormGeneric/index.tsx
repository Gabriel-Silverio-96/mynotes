import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "components/Logo";

import { Header, FormGenericContainer, FormContainer, BackPage } from "./styled";
import { WrapperGenericProps } from "./types";

const FormGeneric: React.FC<WrapperGenericProps> = ({ title, children, widthModal, isHeaderActive, isActiveBack }) => {
    const history = useHistory();
        
    return (
        <>
            <FormGenericContainer>
                {isHeaderActive && (
                    <Header>
                        <Logo themeTitle="dark"/>
                    </Header>
                )}

                <FormContainer widthModal={widthModal}>
                    <h1>{title}</h1>
                    {children}
                </FormContainer>
                
                {isActiveBack && (
                    <BackPage onClick={() => history.goBack()}>
                        Back
                    </BackPage>
                )}
            </FormGenericContainer>
        </>
    )
}

export default FormGeneric;