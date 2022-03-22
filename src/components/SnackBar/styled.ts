import * as variables from "assets/styles/variables";
import styled from "styled-components";
import { IAlignOption, ISnackBarProgressBarStyled, ISnackBarStyled, ITypeMessageStyled, Postion } from "./types/types.styled";

const TypeMessage = (typeMessage: string): string => {
    const typeMessageOption: ITypeMessageStyled = {
        success: variables.success,
        error: variables.red,
        warning: variables.warning,
    }
    return typeMessageOption[typeMessage] || variables.success;
}

const AlignSnackBar = (align: string): Postion => {
    const DEFAULT_POSITION = "1rem";
    const alignOption: IAlignOption = {
        topCenter: {
            top: DEFAULT_POSITION,
            bottom: "inherit",
            right: "0",
            left: "0",
        },       
        topRight: {
            top: DEFAULT_POSITION,
            bottom: "inherit",
            right: DEFAULT_POSITION,
            left: "inherit",
        },       
        topLeft: {
            top: DEFAULT_POSITION,
            bottom: "inherit",
            right: "inherit",
            left: DEFAULT_POSITION,
        },       
        bottomCenter: {
            top: "inherit",
            bottom: DEFAULT_POSITION,
            right: "0",
            left: "0",
        },       
        bottomRight: {
            top: "inherit",
            bottom: DEFAULT_POSITION,
            right: DEFAULT_POSITION,
            left: "inherit",
        },       
        bottomLeft: {
            top: "inherit",
            bottom: DEFAULT_POSITION,
            right: "inherit",
            left: DEFAULT_POSITION,
        },       
    }

    return alignOption[align]
}

export const SnackBar = styled.div<ISnackBarStyled>`
    position: absolute;
    top: ${({ align }) => AlignSnackBar(align!).top};
    right: ${({ align }) => AlignSnackBar(align!).right};
    left: ${({ align }) => AlignSnackBar(align!).left};
    bottom: ${({ align }) => AlignSnackBar(align!).bottom};
    margin: auto;
    color: ${variables.white};
    background-color: ${({ typeMessage }) => TypeMessage(typeMessage)};
    padding: 1rem;
    border-radius: 0.5rem;
    width: 16rem;
    border: 0.2rem solid ${({ typeMessage }) => TypeMessage(typeMessage)};
    border-top: 0;
    border-right: 0;
    border-left: 0;
    box-shadow: -2px 10px 19px 0px rgb(0 0 0 / 17%);
    z-index: 99;

    &:empty {
        display: none;
    }

    h4 {        
        text-transform: capitalize;    
    }

    p {
        font-size: 0.8rem;
    }

    animation: TopShow 0.5s; 
    animation-fill-mode: backwards;

    @keyframes TopShow {
        0% {
            opacity: 0;
            bottom: 0;
        }
        
        100% {
            opacity: 1;
            bottom: ${({ align }) => AlignSnackBar(align!).bottom};
        }
    }
`

export const SnackBarProgressBar = styled.div<ISnackBarProgressBarStyled>`
    height: 0px;
    width: 1px;
    border-bottom: 0.3125rem solid ${variables.white + "ad"};
    position: absolute;
    left: 0;
    bottom: -0.15rem;
    border-radius: 0rem 0rem 1rem 1rem;
    animation: Increase ${({delay}) => `${delay!/1000}s`}; 
    animation-fill-mode: forwards;

    @keyframes Increase {
        100% {
            width: 100%;
        }
    }
`

export const SnackBarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.4rem;
`