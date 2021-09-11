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

    border-bottom: 0.3rem solid ${props => props.colorNote};

    h3 {
        color: ${props => props.theme.colors.textColorTitle};
    }
`
export const NoteCardHeader = styled.div`

`
export const NoteCardBody = styled.div`
    margin-top: 2rem;

    p {
        color: ${props => props.theme.colors.textColorParagraph};
        font-size: 0.9rem;        
    }
`
