import styled from "styled-components";
import * as variables from "assets/styles/variables";
import { IDialog, IDialogOptionSize } from "./types";

const DialogSize = (size: string): string => {
    const DialogOptionSize: IDialogOptionSize = {
        fullScreen: "100%",
        lg: "45rem",
        md: "35rem",
        xs: "20rem",
        default: "35rem"
    };

    return DialogOptionSize[size] || DialogOptionSize.default;
}

export const DialogContainer = styled.div<IDialog>`
    width: -webkit-fill-available;    
    width: -moz-available;    
    height: 100%;
    background-color: ${variables.blackLight};  
    position: fixed; 
    display: flex;
    left: 0;
    top: 0;
    overflow: auto; 
    z-index: 1;
    padding: ${({size}) => size === "fullScreen" ? "0" : "1rem"};    
`

export const DialogContent = styled.div<IDialog>`
    width: 100%;
    max-width: ${({size}) => DialogSize(size!)};
    min-height: ${({size, minHeight}) => {
        if(size === "fullScreen") return "100%";
        if(minHeight) return `${minHeight}rem`;
        return "15rem"        
    }};
    padding: 1.5rem;
    background-color: ${props => props.theme.colors.backgroundSecundary};
    border-radius: ${({size}) => size === "fullScreen" ? "0" : "1rem"};
    margin: auto;
`