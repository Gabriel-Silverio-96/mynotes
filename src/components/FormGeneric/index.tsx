import React from "react";
import { Link } from "react-router-dom";
import { WrapperGenericProps } from "./types";

//Assets
import { Header, FormGenericContainer, FormContainer } from "./styled";
import LogoDark from "assets/images/logo-mynotes-dark.svg";

const FormGeneric: React.FC<WrapperGenericProps> = ({ title, children, widthModal, isHeaderActive}) => {
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

                <Link to="/">
                    Back
                </Link>
            </FormGenericContainer>
        </>
    )
}

export default FormGeneric;