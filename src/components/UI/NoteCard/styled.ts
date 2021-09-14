import styled from "styled-components";
import * as variable from "assets/styles/variables";
import { NoteCardContainerProps } from "./types";

export const NoteCardContainer = styled.div<NoteCardContainerProps>`
    padding: 1rem;
    background-color: ${props => props.theme.colors.backgroundSecundary};
    min-height: 10rem;
    border-radius: 0.5rem;
    border: 0.09rem solid ${variable.black};
    border-top-color: ${variable.black};    
    border-left-color: ${variable.black};
    border-right-color: ${variable.black};
    cursor: pointer;

    border-bottom: 0.3rem solid ${props => props.colorNote};

    h3 {
        color: ${props => props.theme.colors.textColorTitle};
    }

    &:hover {
        & > div > div {
            opacity: 1;
        }
    }
`
export const NoteCardHeader = styled.div`
    position: relative;
`

export const NoteCardButton = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: -5px;
    right: 0;
    width: 100%;
    background: red;
    justify-content: flex-end;
    opacity: 0;
    transition: 0.3s;

    background: linear-gradient(
            90deg, rgba(255,0,0,0) 0%, 
            ${props => props.theme.colors.backgroundSecundary} 100%
        );

    button {
        svg {
            transform: scale(1.5);
        }
    }
`

export const NoteCardBody = styled.div`
    margin-top: 2rem;

    p {
        color: ${props => props.theme.colors.textColorParagraph};
        font-size: 0.9rem;        
    }
`
