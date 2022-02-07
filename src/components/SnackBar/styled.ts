import * as variables from "assets/styles/variables";
import styled from "styled-components";
import { IAlignOption, ISnackBarStyled, ITypeMessageStyled, Postion } from "./types";

const TypeMessage = (message: string): string => {
    const typeMessage: ITypeMessageStyled = {
        success: variables.success,
        error: variables.red,
        warning: variables.warning,
    }
    return typeMessage[message] || variables.success;
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
        margin-bottom: 0.4rem;    
        text-transform: capitalize;    
    }

    p {
        font-size: 0.8rem;
    }
`