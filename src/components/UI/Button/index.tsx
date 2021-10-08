import React from "react";
import { ButtonProps, ButtonRoundProps } from "./types";

import { ButtonPrimaryContainer, ButtonSecodaryContainer, ButtonRoundContainer, ButtonDeleteContainer, ButtonNoBackgroundContainer } from "./styled";
import { IconTrash } from "../Icons";

const ButtonPrimary: React.FC<ButtonProps> = ({ title, onClick, type, dataModal }) => {
    return (
        <ButtonPrimaryContainer
            type={type}
            onClick={onClick}
            data-modal={dataModal}
        >
            {title}
        </ButtonPrimaryContainer>
    )
}

const ButtonSecodary: React.FC<ButtonProps> = ({ title, onClick, type, dataModal }) => {
    return (
        <ButtonSecodaryContainer
            type={type}
            onClick={onClick}
            data-modal={dataModal}
        >
            {title}
        </ButtonSecodaryContainer>
    )
}

const ButtonNoBackground: React.FC<ButtonProps> = ({ title, onClick }) => {
    return (
        <ButtonNoBackgroundContainer
            onClick={onClick}
        >
            {title}
        </ButtonNoBackgroundContainer>
    )
}

const ButtonDelete: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <ButtonDeleteContainer onClick={onClick}>
            <IconTrash /> Delete
        </ButtonDeleteContainer>
    )
}

const ButtonRound: React.FC<ButtonRoundProps> = ({ children, onClick, type, scale, deleteButton, id, ...rest }) => {
    return (
        <ButtonRoundContainer
            type={type}
            onClick={onClick}
            scale={scale}
            deleteButton={deleteButton}
            id={id}
            {...rest}
        >
            {children}
        </ButtonRoundContainer>
    )
}

export { ButtonPrimary, ButtonSecodary, ButtonRound, ButtonDelete, ButtonNoBackground };