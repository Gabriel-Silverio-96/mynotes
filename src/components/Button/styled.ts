import styled from "styled-components";
import * as variables from "assets/styles/variables";
import { ButtonContainerProps, ButtonVariantProps, ButtonSizeProps } from "./types";

const ButtonVariant: ButtonVariantProps = {
    primary: {
        backgroundColor: `${variables.black}`,
        backgroundColorHover: `${variables.primaryColor}`,
        color: `${variables.white}`,
        colorHover: `${variables.white}`,
        border: (props: any) => props.theme.colors.textColorTitle,
        borderHover: (props: any) => props.theme.colors.backgroundPrimary
    },
    secondary: {
        backgroundColor: "transparent",
        backgroundColorHover: `${variables.primaryColor}`,
        color: (props: any) => props.theme.colors.textColorTitle,
        colorHover: `${variables.white}`,
        border: (props: any) => props.theme.colors.textColorTitle,
        borderHover: (props: any) => props.theme.colors.backgroundPrimary
    },
    text: {
        backgroundColor: "transparent",
        backgroundColorHover: "none",
        color: (props: any) => props.theme.colors.textColorTitle,
        colorHover: `${variables.primaryColor}`,
        border: "transparent",
        borderHover: "transparent"
    },    
    delete: {
        backgroundColor: `${variables.redLight}`,
        backgroundColorHover: `${variables.red}`,
        color: `${variables.red}`,
        colorHover: `${variables.white}`,
        border: "transparent",
        borderHover: "transparent"
    },
};

const ButtonSize: ButtonSizeProps = {
    large: {
        fontSize: "1rem",
        padding: "1rem 1.2rem",
    },
    medium: {
        fontSize:"0.9rem",
        padding: "0.75rem 1rem",
    },
    small: {
        fontSize:"0.7rem",
        padding: "0.5rem 0.75rem",
    },
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background-color: ${({ variant }) => ButtonVariant[variant!]!.backgroundColor}};
    color: ${({ variant }) => ButtonVariant[variant!]!.color}};
    border: 0.03rem solid ${({ variant }) => ButtonVariant[variant!]!.border}};;
    font-size: ${({ size }) => ButtonSize[size!].fontSize};
    padding: ${({ size }) => ButtonSize[size!].padding};
    border-radius: 0.3125rem;
    height: fit-content;
    cursor: pointer;
    transition: 0.3s;    
    
    &:hover:not([disabled]) {
        background-color: ${({ variant }) => ButtonVariant[variant!]!.backgroundColorHover};        
        color: ${({ variant }) => ButtonVariant[variant!]!.colorHover};  
        border-color: ${({ variant }) => ButtonVariant[variant!]!.borderHover};      
    }

    &:disabled {
        background-color: ${props => props.theme.title === "dark" ? "#303030" : variables.disabledColor };     
        color: #6e6e6e;
        cursor: not-allowed;        
    }
`

export const IconButton = styled.span`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`