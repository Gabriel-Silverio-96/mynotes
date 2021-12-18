import styled from "styled-components";
import * as variables from "assets/styles/variables";
import { ButtonContainerProps, ButtonRoundContainerProps, ButtonVariantProps, ButtonSizeProps } from "./types";

const ButtonVariant: ButtonVariantProps = {
    primary: {
        backgroundColor: `${variables.black}`,
        backgroundColorHover: `${variables.primaryColor}`,
        color: `${variables.white}`,
        colorHover: `${variables.white}`,
        border: (props: any) => props.theme.colors.textColorTitle
    },
    secondary: {
        backgroundColor: "transparent",
        backgroundColorHover: `${variables.primaryColor}`,
        color: (props: any) => props.theme.colors.textColorTitle,
        colorHover: `${variables.white}`,
        border: (props: any) => props.theme.colors.textColorTitle
    },
    text: {
        backgroundColor: "transparent",
        backgroundColorHover: "none",
        color: (props: any) => props.theme.colors.textColorTitle,
        colorHover: `${variables.primaryColor}`,
        border: "transparent"
    },    
    delete: {
        backgroundColor: `${variables.redLight}`,
        backgroundColorHover: `${variables.red}`,
        color: `${variables.red}`,
        colorHover: `${variables.white}`,
        border: "transparent"
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
    
    &:hover {
        background-color: ${({ variant }) => ButtonVariant[variant!]!.backgroundColorHover};        
        color: ${({ variant }) => ButtonVariant[variant!]!.colorHover};  
        border-color: ${props => props.theme.colors.backgroundPrimary};      
    }

    &:disabled {
        background-color: ${variables.black} !important;                
        cursor: not-allowed;
        opacity: 0.5;       
    }
`

export const IconButton = styled.span`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`

export const ButtonRoundContainer = styled.button<ButtonRoundContainerProps>`
    background-color: ${props => props.deleteButton ? `${variables.redLight}` : `${variables.grayLight}`};
    border: 0;
    padding: 0.65rem;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
    transition: 0.3s;
    transform: scale(
        ${props => props.scale}
    );

    &:hover {
        background-color: ${props => props.deleteButton ? `${variables.red}` : `${variables.yellowLight}`};
        
        svg {
            path {
                fill: ${props => props.deleteButton && `${variables.white}`};
            }
        }
    }

    &:disabled {
        opacity: 0.3;
        background-color: ${variables.grayMedium};     
        cursor: not-allowed;   
        
        svg {
            path {
                fill: ${variables.black};
            }
        }
    }
`

export const ButtonSecodaryContainer = styled.button`
    background-color: transparent;
    color: ${props => props.theme.colors.textColorTitle};
    border: 0.03rem solid ${props => props.theme.colors.textColorTitle};
    font-size: 0.9rem;
    padding: 0.7rem 1rem;
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${variables.primaryColor};     
        color: ${variables.white}; 
        border-color: ${props => props.theme.colors.backgroundPrimary};
    }
`

export const ButtonDeleteContainer = styled.button`
    background-color: ${variables.redLight};
    color: ${variables.red};
    font-size: 0.9rem;
    padding: 0.75rem 1rem;
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: 0.3s;
    border: 0;

    &:hover {
        background-color: ${variables.red};  
        color: ${variables.white};              

        svg {
            path {
                fill: ${variables.white};
            }
        }
    }
`

export const ButtonNoBackgroundContainer = styled.button`
    background-color: transparent;
    border: 0;
    color: ${variables.white};    
    padding: 0.5rem 1rem;
`