import React from "react";
import { ButtonProps } from "./types";

import { ButtonPrimaryContainer, ButtonSecodaryContainer, ButtonRoundContainer } from "./styled";

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

const ButtonSecodary: React.FC<ButtonProps> = ({ title, onClick, type }) => {
    return (
        <ButtonSecodaryContainer
            type={type}
            onClick={onClick}            
            >
            {title}
        </ButtonSecodaryContainer>
    )
}

const ButtonRound: React.FC<ButtonProps> = ({ children, onClick, type, scale }) => {
    return (
        <ButtonRoundContainer
            type={type}
            onClick={onClick}
            scale={scale}
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

export { ButtonPrimary, ButtonSecodary, ButtonRound, Delete };