import React from "react";
import { ButtonProps, ButtonRoundProps } from "./types";

import { ButtonPrimaryContainer, ButtonSecodaryContainer, ButtonRoundContainer, ButtonDeleteContainer } from "./styled";
import { IconTrash } from "../Icons";

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

const ButtonDelete: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <ButtonDeleteContainer onClick={onClick}>
            <IconTrash /> Delete            
        </ButtonDeleteContainer>
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

export { ButtonPrimary, ButtonSecodary, ButtonRound, ButtonDelete };