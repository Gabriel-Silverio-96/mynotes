import styled from "styled-components";
import * as variables from "assets/styles/variables";
import { ButtonPrimaryContainerProps, ButtonRoundContainerProps } from "./types";

export const ButtonPrimaryContainer = styled.button<ButtonPrimaryContainerProps>`
    background-color: ${variables.black};
    color: ${variables.white};
    border: 0.03rem solid ${variables.white};
    font-size: ${({ size }) => {
        if (size === "large") {
            return "1rem"
        }
        if (size === "small") {
            return "0.7rem"
        }

        return "0.9rem"
    }};
    padding: ${({ size }) => {
        if (size === "large") {
            return "1rem 1.2rem"
        }

        return "0.75rem 1rem"
    }};
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: 0.3s;    
    
    &:hover {
        background-color: ${variables.primaryColor};                
    }

    &:disabled {
        background-color: ${variables.black} !important;                
        cursor: not-allowed;
        opacity: 0.4;
    }
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
        border-color: ${props => props.theme.colors.backgroundPrimary};; 
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