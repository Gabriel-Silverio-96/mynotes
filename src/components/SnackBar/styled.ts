import styled from "styled-components";
import { SnackBarContainerProps, TypeMessageProps } from "./types";
import * as variables from "assets/styles/variables";

const interceptorTypeMessage = (message: string): string => {
    const typeMessage: TypeMessageProps = {
        success: variables.success,
        error: variables.red,
        warning: variables.warning,
    }
    return typeMessage[message] || variables.success
}

export const SnackBarContainer = styled.div<SnackBarContainerProps>`
    position: absolute;
    bottom: 1rem;
    right: 0;
    left: 0;
    margin: auto;

    color: ${props => props.theme.colors.textColorParagraph};
    background-color: ${props => props.theme.colors.backgroundSecundary};
    padding: 1rem;
    border-radius: 0.5rem;
    width: 15rem;
    border: 0.2rem solid ${({ typeMessage }) => interceptorTypeMessage(typeMessage)};
    border-top: 0;
    border-right: 0;
    border-left: 0;
    box-shadow: -2px 10px 19px 0px rgb(0 0 0 / 17%);

    &:empty {
        display: none;
    }
`