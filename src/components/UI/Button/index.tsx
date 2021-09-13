import React from "react";
import { ButtonProps, ButtonRoundProps } from "./types";

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

const ButtonRound: React.FC<ButtonRoundProps> = ({ children, onClick, type, scale, deleteButton, id }) => {
    return (
        <ButtonRoundContainer
            type={type}
            onClick={onClick}
            scale={scale}
            deleteButton={deleteButton}
            id={id}
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