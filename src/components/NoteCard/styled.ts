import styled from "styled-components";
import { INoteCardStyled } from "./types/types.styled";

export const NoteCard = styled.div<INoteCardStyled>`
    padding: 1rem;
    background-color: ${props => props.theme.colors.backgroundSecundary};
    min-height: 10rem;
    border-radius: 0.5rem;
    border: 0.09rem solid ${props => props.theme.colors.noteCardBorder};
    border-top-color: ${props => props.theme.colors.noteCardBorder};    
    border-left-color: ${props => props.theme.colors.noteCardBorder};
    border-right-color: ${props => props.theme.colors.noteCardBorder};
    cursor: pointer;
    word-break: break-all;
    border-bottom: 0.3rem solid ${props => props.colorNote};

    h3 {
        color: ${props => props.theme.colors.textColorTitle};
    }

    &:hover {
        & > div > div {
            opacity: 1;
        }
    }
`;
export const NoteCardHeader = styled.div`
    position: relative;
`;

export const NoteCardButton = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: -5px;
    right: 0;
    width: 100%;
    justify-content: flex-end;
    opacity: 0;
    transition: 0.3s;
    height: 10rem;
    align-items: baseline;
    gap: 0.5rem;

    background: linear-gradient(90deg, rgba(255,0,0,0) 0%,        
        ${props => props.theme.colors.backgroundSecundary} 100%
    );   
`;

export const NoteCardBody = styled.div`
    margin-top: 2rem;

    p {
        color: ${props => props.theme.colors.textColorParagraph};
        font-size: 0.9rem;        
    }
`;
