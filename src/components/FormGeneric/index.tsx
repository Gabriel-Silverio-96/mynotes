import React from "react";
import { useHistory } from "react-router-dom";
import { WrapperGenericProps } from "./types";

//Assets
import { Header, FormGenericContainer, FormContainer, BackPage } from "./styled";
import LogoDark from "assets/images/logo-mynotes-dark.svg";

const FormGeneric: React.FC<WrapperGenericProps> = ({ title, children, widthModal, isHeaderActive, isActiveBack }) => {
    const history = useHistory();
        
    return (
        <>
            <FormGenericContainer>
                {isHeaderActive && (
                    <Header>
                        <img src={LogoDark} alt="Logo MyNotes" />
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