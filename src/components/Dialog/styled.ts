import styled from "styled-components";
import * as variables from "assets/styles/variables";
import { IDialogOptionSize, IDialogStyled } from "./types/types.styled";

const DialogSize = (size: string): string => {
	const DialogOptionSize: IDialogOptionSize = {
		fullScreen: "100%",
		lg: "45rem",
		md: "35rem",
		xs: "20rem",
		default: "35rem"
	};

	return DialogOptionSize[size] || DialogOptionSize.default;
};

export const DialogContainer = styled.div<IDialogStyled>`
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

    @media(max-width: 580px) {
       padding: 0;     
    }
`;

export const DialogContent = styled.div<IDialogStyled>`
    width: 100%;
    max-width: ${({size}) => DialogSize(size!)};
    min-height: ${({size, minHeight}) => {
		if(size === "fullScreen") return "100%";
		if(minHeight) return `${minHeight}rem`;
		return "15rem";        
	}};    
    padding: 1.5rem;
    background-color: ${props => props.theme.colors.backgroundSecundary};
    border-radius: ${({size}) => size === "fullScreen" ? "0" : "1rem"};
    margin: ${({size}) => size === "fullScreen" ? "inherit" : "auto"};
    display: ${({size}) => size === "fullScreen" ? "flex" : "block"};
    flex-direction: ${({size}) => size === "fullScreen" ? "column" : "inherit"};

    .dialog-action {        
        margin-top: margin: ${({size}) => size === "fullScreen" ? "inherit" : "auto"};;
    }

    @media(max-width: 580px) {
        display: flex;
        flex-direction: column;
        border-radius: 0;
        margin: inherit;
        max-width: 100%;

        .dialog-action {
            margin-top: auto;
        }
    }
`;