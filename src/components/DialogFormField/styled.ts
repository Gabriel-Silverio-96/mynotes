import styled from "styled-components";
import * as variables from "assets/styles/variables";

export const DialogFormField = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    label {
        color: ${props => props.theme.colors.textColorParagraph};
        margin-bottom: 0.5rem;
    }

    input {
        padding: 0.6rem 0.5rem;
        border: 0.2rem solid ${props => props.theme.colors.inputBorder};
        border-radius: 0.5rem;
        background-color: transparent;
        font-size: 1rem;
        color: ${props => props.theme.colors.textColorParagraph};
        background-color: ${props => props.theme.colors.backgroundPrimary};

        &:focus {
            border-color: ${variables.primaryColor};
            outline: 0;            
        }

        + span {
            color: ${variables.red};
            font-size: 0.8rem;
        }
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
            border-color: ${variables.primaryColor};
            outline: 0;            
        }

        + span {
            color: ${variables.red};;
            font-size: 0.8rem;
        }
    }
`
