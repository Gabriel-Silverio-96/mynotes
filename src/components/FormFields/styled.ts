import styled from "styled-components";
import * as variables from "assets/styles/variables";

export const InputGroup = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    label {
        color: ${props => props.theme.colors.textColorParagraph};
        margin-bottom: 0.5rem;
    }

    textarea {
        padding: 0.6rem 0.5rem;
        border: 0.2rem solid ${props => props.theme.colors.inputBorder};
        border-radius: 0.5rem;
        background-color: transparent;
        font-size: 1rem;
        color: ${props => props.theme.colors.textColorParagraph};
        background-color: ${props => props.theme.colors.backgroundPrimary};
        resize: vertical;

        &:focus {
            border-color: ${variables.color_primary};
            outline: 0;
        }
    }

    span {
        color: ${variables.color_danger};
        margin-left: 0.2rem;
        font-size: 0.8rem;
    }
`;

export const InputElement = styled.div`
    position: relative;

    .loading-input {
        position: absolute;
        bottom: 0.6rem;
        left: 0.8rem;
    }

    input {
        width: intrinsic;
        width: -webkit-fill-available;
        width: -moz-available;
        padding: 0.6rem 0.5rem;
        border: 0.2rem solid ${props => props.theme.colors.inputBorder};
        border-radius: 0.5rem;
        font-size: 1rem;
        color: ${props => props.theme.colors.textColorParagraph};
        background-color: ${props => props.theme.colors.backgroundPrimary};

        &:focus {
            border-color: ${variables.color_primary};
            outline: 0;
        }
    }

    .button-eye-password {
        position: absolute;
        width: min-content;
        right: 0rem;
        top: 0.2rem;
        margin-top: 0;
    }
`;