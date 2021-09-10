import React from "react";
import { ButtonProps } from "./types";

import { ButtonPrimaryContainer, ButtonRoundContainer } from "./styled";

const ButtonPrimary: React.FC<ButtonProps> = ({ title, onClick, type }) => {
    return (
        <ButtonPrimaryContainer
            type={type}
            onClick={onClick}
            >
            {title}
        </ButtonPrimaryContainer>
    )
}

const ButtonRound: React.FC<ButtonProps> = ({ children, onClick, type }) => {
    return (
        <ButtonRoundContainer
            type={type}
            onClick={onClick}
        >
            {children}
        </ButtonRoundContainer>
    )
}

function Delete() {
    return (
        <>
        </>
    )
}

export { ButtonPrimary, ButtonRound, Delete };