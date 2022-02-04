import * as variables from "assets/styles/variables";
import styled from "styled-components";
import { ISnackBarStyled, ITypeMessage } from "./types";

const TypeMessage = (message: string): string => {
    const typeMessage: ITypeMessage = {
        success: variables.success,
        error: variables.red,
        warning: variables.warning,
    }
    return typeMessage[message] || variables.success
}

export const SnackBar = styled.div<ISnackBarStyled>`
    position: absolute;
    top: 1rem;
    right: 0;
    left: 0;
    margin: auto;
    color: ${variables.white};
    background-color: ${({ typeMessage }) => TypeMessage(typeMessage)};
    padding: 1rem;
    border-radius: 0.5rem;
    width: 15rem;
    border: 0.2rem solid ${({ typeMessage }) => TypeMessage(typeMessage)};
    border-top: 0;
    border-right: 0;
    border-left: 0;
    box-shadow: -2px 10px 19px 0px rgb(0 0 0 / 17%);
    z-index: 99;

    &:empty {
        display: none;
    }
`